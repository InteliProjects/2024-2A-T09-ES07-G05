from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from scraper.pdf_utils import verificar_pdf_valido, extrair_texto_pdf, calcular_hash
from config import get_selenium_driver
import requests
import datetime
import os
import boto3 
from dotenv import load_dotenv
import urllib.parse

load_dotenv()

# Configuração do AWS S3
aws_access_key_id = os.getenv('AWS_ACCESS_KEY_ID')
aws_secret_access_key = os.getenv('AWS_SECRET_ACCESS_KEY')
aws_session_token = os.getenv('AWS_SESSION_TOKEN') 
aws_default_region = os.getenv('AWS_DEFAULT_REGION')

# Função para enviar um arquivo para o S3
def upload_to_s3(file_path, bucket_name, object_name=None):
    s3_client = boto3.client(
        's3',
        aws_access_key_id=aws_access_key_id,
        aws_secret_access_key=aws_secret_access_key,
        aws_session_token=aws_session_token,
        region_name=aws_default_region
    )
    
    if object_name is None:
        object_name = os.path.basename(file_path)
    
    try:
        s3_client.upload_file(file_path, bucket_name, object_name)
        print(f"Arquivo {file_path} enviado para {bucket_name}/{object_name}")
        
        encoded_object_name = urllib.parse.quote(object_name)
        url = f"https://{bucket_name}.s3.amazonaws.com/{encoded_object_name}"
        return url
    
    except Exception as e:
        print(f"Erro ao enviar o arquivo para o S3: {e}")
        return None

# Função para pegar os ofícios da ANBIMA
def scrape_anbima_oficios():
    today = datetime.date.today()
    yesterday = today - datetime.timedelta(days=1)

    driver = get_selenium_driver()
    oficio_data = []

    try:
        oficios_url = "https://www.anbima.com.br/pt_br/institucional/comunicados-oficiais/oficios/oficios.htm"
        driver.get(oficios_url)

        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//ul[contains(@class, 'biblioteca-docs ultimas-publicacoes')]/li/a"))
        )

        oficio_items = driver.find_elements(By.XPATH, "//ul[contains(@class, 'biblioteca-docs ultimas-publicacoes')]/li/a")[:5]
        oficio_links = [item.get_attribute('href') for item in oficio_items]
        oficio_datas = [item.find_element(By.TAG_NAME, 'small').text for item in oficio_items]
        oficio_titulos = [item.find_element(By.TAG_NAME, 'p').text for item in oficio_items]

        # Processar cada ofício
        for link, data, titulo in zip(oficio_links, oficio_datas, oficio_titulos):
            try:
                doc_date = datetime.datetime.strptime(data.strip(), '%d/%m/%Y').date()
            except ValueError:
                print(f"Erro ao converter a data: {data}")
                continue

            if doc_date == yesterday:
                driver.get(link)
                
                WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CLASS_NAME, "ultimas-noticias"))
                )

                descricao_element = driver.find_element(By.XPATH, "//div[contains(@class, 'ultimas-noticias')]//p")
                descricao = descricao_element.text

                download_button = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CLASS_NAME, "btn-green"))
                )
                pdf_link = download_button.get_attribute('href')
                
                pdf_response = requests.get(pdf_link)
                pdf_filename = pdf_link.split("/")[-1] 
                temp_dir = '/tmp/'
                temp_pdf_path = os.path.join(temp_dir, pdf_filename)

                if not os.path.exists(temp_dir):
                    os.makedirs(temp_dir)

                with open(temp_pdf_path, 'wb') as pdf_file:
                    pdf_file.write(pdf_response.content)

                # Verificar se o PDF é válido
                if verificar_pdf_valido(temp_pdf_path):
                    # Calcular o hash do arquivo e verifica se já existe no banco
                    arquivo_hash = calcular_hash(temp_pdf_path)
                    print(f"Hash do arquivo: {arquivo_hash}")

                    response = requests.post(
                        url="http://localhost:8000/normas/search-arquivo/",
                        json={"arquivo": arquivo_hash}
                    )

                    if response.status_code == 200:
                        result = response.json()
                        if result.get(True):
                            print(f"Arquivo já existe no banco, ignorando o processamento.")
                            os.remove(temp_pdf_path) 
                            continue
                        else:
                            print(f"Arquivo não encontrado no banco, prosseguindo com o processamento.")

                            # Extrai o texto do PDF
                            texto_pdf = extrair_texto_pdf(temp_pdf_path)
                            if texto_pdf:
                                texto_pdf = texto_pdf.encode('utf-8').decode('utf-8').replace('\n', ' ')
                                print(f"Texto extraído do PDF: {texto_pdf[:100]}...")

                                bucket_name = 'cora-documentos'
                                url = upload_to_s3(temp_pdf_path, bucket_name)

                                message = {
                                    'data': data,
                                    'titulo': titulo,
                                    'texto': texto_pdf,
                                    'descricao': descricao,
                                    'hash': arquivo_hash,
                                    'url': url
                                }
                                oficio_data.append(message)
                    else:
                        print(f"Erro ao verificar o arquivo no banco: {response.text}")
                
                os.remove(temp_pdf_path)
            else:
                print(f"Documento com data {data} ignorado (não é de ontem).")

    finally:
        driver.quit()
    
    return oficio_data
