import pika
import json
from config import get_rabbitmq_url

# Função para conectar ao RabbitMQ
def connect_to_rabbit():
    params = pika.URLParameters(get_rabbitmq_url())
    connection = pika.BlockingConnection(params)
    return connection

# Função para enviar uma mensagem JSON com o documento para a fila
def send_json_to_queue(message):
    connection = connect_to_rabbit()
    channel = connection.channel()

    channel.queue_declare(queue='scrap_queue', durable=True)
    
    message_json = json.dumps(message, ensure_ascii=False)
    
    channel.basic_publish(
        exchange='',
        routing_key='scrap_queue',
        body=message_json.encode('utf-8'), 
        properties=pika.BasicProperties(delivery_mode=2)
    )

    print(f" [x] Enviado {message_json}")
    connection.close()
