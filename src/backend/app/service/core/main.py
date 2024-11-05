from fastapi import FastAPI, HTTPException, BackgroundTasks, Request
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import pika
from dotenv import load_dotenv
import os
import requests
import json
import time
import asyncio

load_dotenv()

rabbitmq_url = os.getenv("RABBITMQ_URL")
search_api_url = os.getenv("SEARCH_API_URL")

# Conexão com o RabbitMQ
def connect_to_rabbit():
    params = pika.URLParameters(rabbitmq_url)
    connection = pika.BlockingConnection(params)
    return connection

# Webhook: manda o texto do usuário para o serviço de PLN
def webhook_listener(user_text):
    connection = connect_to_rabbit()
    channel = connection.channel()

    channel.queue_declare(queue='pln_queue', durable=True)

    channel.basic_publish(
        exchange='',
        routing_key='pln_queue',
        body=user_text
    )

    print(f"[x] Enviado para o PLN: {user_text}")
    connection.close()

# Recebe a intenção do PLN e envia para a API de busca
def process_pln_intent(ch, method, properties, body):
    intent = body.decode()
    print(f"[x] Intenção recebida do PLN: {intent}")

    response = send_to_search_api(intent)

# Envia a intenção para a API de busca
def send_to_search_api(intent):
    try:
        intent_data = json.loads(intent) if isinstance(intent, str) else intent
    except json.JSONDecodeError as e:
        print(f"Erro ao decodificar JSON: {e}")
        raise HTTPException(status_code=400, detail="Payload inválido.")

    print(f"Enviando esse dado para a API de busca: {intent_data}")
    response = requests.post(search_api_url + "/normas/search/", json=intent_data)

    print(f"[x] Enviado para a API de busca: {intent_data}")
    print(f"Resposta da API de busca: {response.status_code}, {response.text}")

    # Verifica se a resposta da API de busca está vazia
    if response.status_code == 200 and response.json():
        normas_queue.append(response.json())
    else:
        normas_queue.append({"message": "Nenhuma norma disponível no momento."})

# Core recebendo o retorno do PLN
def listen_for_pln():
    connection = connect_to_rabbit()
    channel = connection.channel()

    channel.queue_declare(queue='core_queue', durable=True)
    
    response = channel.basic_consume(
        queue='core_queue',
        on_message_callback=process_pln_intent,
        auto_ack=True
    )

    print('[*] Aguardando mensagens do PLN. Para sair, pressione CTRL+C')
    channel.start_consuming()

def receive_webhook(text):
    print(f"[x] Texto recebido do webhook: {text}")
    webhook_listener(text)

app = FastAPI()

# Fila para armazenar normas recebidas
normas_queue = []

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todas as origens.
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

# Novo endpoint de webhook para receber a transcrição de texto
@app.post("/webhook/transcription-completed", status_code=200)
async def handle_transcription_completed(transcription_data: dict, background_tasks: BackgroundTasks):
    try:
        # Recebe o texto transcrito enviado pelo frontend
        text_transcribed = transcription_data.get('text')
        receive_webhook(text_transcribed)
        background_tasks.add_task(listen_for_pln)

        if not text_transcribed:
            raise HTTPException(status_code=400, detail="Texto transcrito não fornecido.")

        # Imprime no console que o texto foi recebido
        print(f"Texto transcrito recebido: {text_transcribed}")

        # Retorna uma mensagem de sucesso
        return {"message": "Texto transcrito recebido com sucesso."}
    except Exception as e:
        return {"error": str(e)}

# Endpoint do webhook para receber as normas encontradas
@app.post("/webhook/busca-normas", status_code=200)
async def handle_search_completed(normas: dict):
    try:
        # Recebe as normas enviadas pela API de busca
        normas_encontradas = normas
        if not normas_encontradas:
            raise HTTPException(status_code=400, detail="Normas não fornecidas.")

        # Imprime no console que as normas foram recebidas
        normas_queue.append(normas_encontradas)
        print(f"Normas recebidas: {normas_encontradas}")

        # Retorna uma mensagem de sucesso
        return {"message": "Normas recebidas com sucesso."}
    except Exception as e:
        return {"error": str(e)}

# Endpoint de SSE para enviar normas ao frontend em tempo real
@app.get("/stream")
async def stream_normas(request: Request):
    async def event_generator():
        while True:
            if await request.is_disconnected():
                break

            if normas_queue:
                # Pega a norma da fila e envia
                print(f"Enviando norma: {normas_queue[0]}")
                norma = normas_queue.pop(0)
                yield f"data: {json.dumps(norma)}\n\n"
            await asyncio.sleep(1)  # Aguardar antes de verificar novas normas

    return StreamingResponse(event_generator(), media_type="text/event-stream")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080, reload=True)