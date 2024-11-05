import pytest
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from fastapi.testclient import TestClient
from main import app, send_to_search_api, webhook_listener

client = TestClient(app)

search_api_url = os.getenv("SEARCH_API_URL")

def test_handle_transcription_completed(mocker):
    mocker.patch("main.receive_webhook")
    mocker.patch("main.listen_for_pln")
    
    transcription_data = {
        "text": "Este é um exemplo de transcrição."
    }
    
    response = client.post("/webhook/transcription-completed", json=transcription_data)
    
    assert response.status_code == 200
    assert response.json() == {"message": "Texto transcrito recebido com sucesso."}

def test_send_to_search_api(mocker):
    mock_post = mocker.patch("requests.post")
    
    
    mock_post.return_value.status_code = 200
    mock_post.return_value.text = '{"result": "success"}'

    intent_data = {"intent": "buscar normas"}
    
    send_to_search_api(intent_data)
    
    mock_post.assert_called_once_with(
        search_api_url + "/normas/search/",
        json=intent_data
    )

def test_webhook_listener(mocker):
    mock_connection = mocker.patch("main.connect_to_rabbit")
    mock_channel = mock_connection.return_value.channel.return_value
    
    user_text = "Texto para o RabbitMQ"
    
    webhook_listener(user_text)
    
    mock_channel.queue_declare.assert_called_once_with(queue='pln_queue', durable=True)
    mock_channel.basic_publish.assert_called_once_with(
        exchange='',
        routing_key='pln_queue',
        body=user_text
    )
    mock_connection.return_value.close.assert_called_once()

def test_handle_search_completed(mocker):
  
    normas = {
        "normas": ["Norma 1", "Norma 2"]
    }
    
    response = client.post("/webhook/busca-normas", json=normas)
    
    
    assert response.status_code == 200
    assert response.json() == {"message": "Normas recebidas com sucesso."}
