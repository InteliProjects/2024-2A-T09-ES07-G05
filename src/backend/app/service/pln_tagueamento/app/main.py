import os
import google.generativeai as genai
import json
from dotenv import load_dotenv
import requests
import pika

load_dotenv()

gemini_api_key = os.getenv("GEMINI_API_KEY")
rabbitmq_url = os.getenv("RABBITMQ_URL")

GEMINI_API_KEY = "AIzaSyCsXOs6layDP-1aFzJ_WkTNjiuNIN_d0BY"
genai.configure(api_key=GEMINI_API_KEY)

generation_config = {
    'candidate_count': 1,
    'stop_sequences': None,
    'max_output_tokens': None,
    'temperature': 0.2,
    'top_p': None,
    'top_k': None,
}

model = genai.GenerativeModel(
    model_name='gemini-pro',
    generation_config=generation_config)


def connect_to_rabbit():
    params = pika.URLParameters(rabbitmq_url)
    connection = pika.BlockingConnection(params)
    return connection


def ouvir_mensagens(fila):
    connection = connect_to_rabbit()
    channel = connection.channel()

    channel.queue_declare(queue=fila, durable=True)

    def callback(ch, method, properties, body):
        try:
            mensagem = body.decode('utf-8')
        except UnicodeDecodeError:
            mensagem = body.decode('utf-8', errors='replace')

        mensagem_limpa = ' '.join(mensagem.split())

        try:
            message_json = json.loads(mensagem_limpa)
            print("Recebido e decodificado:", json.dumps(message_json, ensure_ascii=False, indent=2))

            # Imprime as chaves do JSON para ver o que foi recebido
            print("Chaves do JSON recebido:", message_json.keys())

            titulo = message_json.get("titulo", "")
            data_expedicao = message_json.get("data", "")
            descricao = message_json.get("descricao", "")
            hash_arquivo = message_json.get("hash", "")
            url_s3 = message_json.get("url", "")

            if not titulo or not data_expedicao or not hash_arquivo:
                print("Um ou mais valores estão faltando no JSON recebido.")
                return

            document = message_json.get("texto", "")

            try:
                output_gemini = generate_content_gemini(document, tags)
                print(f"output_gemini: {output_gemini}")
            except Exception as e:
                print(f"Erro ao gerar conteúdo: {e}")
                return

            tags_geradas = output_gemini.get("tags", [])
            revogado = output_gemini.get("revogado", False)

            postar_no_banco_dados(titulo, data_expedicao, descricao, revogado, tags_geradas, hash_arquivo, url_s3)

        except json.JSONDecodeError:
            print("A mensagem recebida não está em formato JSON válido")


    channel.basic_consume(queue=fila, on_message_callback=callback, auto_ack=True)

    print('[X] Esperando por mensagens. Para sair, pressione CTRL+C')
    channel.start_consuming()


def get_tags():
    tags = []

    response = requests.get("http://localhost:8000/tags/")
    data = response.json()
    for tag in data:
        tags.append(tag['nome'])
    return tags


tags = get_tags()


def generate_content_gemini(document, tags):
    initial_prompt = """Você é um assistente especializado na criação de tags para documentos. Quando eu enviar um documento, sua tarefa é gerar uma lista concisa de tags em Python, utilizando SOMENTE as tags da lista prefixada que eu fornecerei. O formato de saída deve ser um objeto JSON, seguindo o exemplo:

    {
        "tags": ['tag1', 'tag2', 'tag3'],
        "revogado": true/false
    }
    Instruções:
    A saída deve ser somente um objeto JSON com as tags geradas e o status de revogação, não envie explicações adicionais ou código.
    A lista de tags deve ser baseada no conteúdo do documento, mas selecione apenas as tags mais relevantes.
    Limite o número de tags a no máximo 10, escolhendo as mais essenciais para descrever o documento.
    Evite duplicatas. Cada tag deve ser única.
    Caso identifique que o documento foi revogado, defina "revogado" como true; caso contrário, defina como false.
    Use tags específicas da lista prefixada e evite adicionar tags genéricas ou irrelevantes.
    Exemplo de Saída:
    Para o documento "Hoje irei comer uma pizza em um restaurante", as tags prefixadas poderiam ser: ['comida', 'restaurantes', 'iogurte', 'rua', 'gato', 'cachorro' 'comida japonesa', 'pizza'] e o resultado esperado seria:

    {
        "tags": ['comida', 'restaurantes', 'pizza'],
        "revogado": false
    }
    Abaixo está o documento e a lista de tags prefixada:"""

    prompt = initial_prompt + str(tags) + "\n\nDocumento: " + document + "\n\nTags:"

    if not document or document.strip() == '':
        raise ValueError("O documento fornecido está vazio ou é inválido.")

    response = model.generate_content(prompt)

    response_text_clean = response.text
    response_text_clean = response_text_clean.replace('```', '').strip()
    response_text_clean = response_text_clean.replace("python", "").strip()
    response_text_clean = response_text_clean.replace("'", '"')
    print(f"Texto limpo: '{response_text_clean}'")

    try:
        result = json.loads(response_text_clean)
    except json.JSONDecodeError:
        raise ValueError("O formato do response clean não está em JSON válido. response_text_clean: " + response_text_clean)

    return result


def postar_no_banco_dados(titulo, data, descricao, revogado, tags, hash_arquivo, url_s3):
    
    norma = {
        "nome": titulo,
        "data_expedicao": data,
        "descricao": descricao,  
        "regulador": "Anbima",
        "revogacao": revogado,
        "arquivo": hash_arquivo,
        "link_s3": url_s3 
    }

    payload = {
        "norma": norma,
        "tags": tags 
    }

    url = "http://localhost:8000/normas/norma-com-tags/"

    try:
        print("Payload que está sendo enviado:", json.dumps(payload, ensure_ascii=False, indent=2))
        response = requests.post(url, json=payload)
        if response.status_code == 201:
            print("Dados enviados com sucesso:", response.json())
        else:
            print(f"Erro ao enviar dados. Status code: {response.status_code}, Resposta: {response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Erro de requisição: {e}")


ouvir_mensagens('scrap_queue')
