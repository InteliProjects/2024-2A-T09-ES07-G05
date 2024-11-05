from PyPDF2 import PdfReader
import hashlib

# Função para verificar se um arquivo PDF é válido
def verificar_pdf_valido(pdf_path):
    try:
        reader = PdfReader(pdf_path)
        return bool(reader.pages)
    except Exception as e:
        print(f"Erro ao verificar o arquivo: {e}")
        return False

# Função para extrair texto de um arquivo PDF
def extrair_texto_pdf(pdf_path):
    try:
        reader = PdfReader(pdf_path)
        texto = ""
        for page in reader.pages:
            texto += page.extract_text()
        return texto
    except Exception as e:
        print(f"Erro ao extrair texto do PDF: {e}")
        return None

# Função para calcular o hash de um arquivo
def calcular_hash(arquivo_path):
    sha256_hash = hashlib.sha256()
    with open(arquivo_path, "rb") as f:
        for byte_block in iter(lambda: f.read(4096), b""):
            sha256_hash.update(byte_block)
    return sha256_hash.hexdigest()