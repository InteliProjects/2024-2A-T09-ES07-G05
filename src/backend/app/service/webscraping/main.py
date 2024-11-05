from scraper.scraper import scrape_anbima_oficios
from scraper.rabbitmq_utils import send_json_to_queue
import logging
import os

log_directory = r'C:\Users\Inteli\Documents\GitHub\2024-2A-T09-ES07-G05\src\backend\app\service\webscraping\logs'

# Cria a pasta de logs se não existir
if not os.path.exists(log_directory):
    os.makedirs(log_directory)

# Configuração do logging
logging.basicConfig(
    filename=os.path.join(log_directory, 'app.log'),
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def main():
    try:
        oficio_data = scrape_anbima_oficios()

        # Envia para a fila RabbitMQ se houver dados
        if oficio_data:
            for message in oficio_data:
                send_json_to_queue(message)
                logging.info(f"Mensagem enviada à fila: {message}")
        else:
            logging.info("Nenhum documento com a data desejada foi encontrado.")
    except Exception as e:
        logging.error(f"Erro na execução do script: {e}")

if __name__ == "__main__":
    main()
