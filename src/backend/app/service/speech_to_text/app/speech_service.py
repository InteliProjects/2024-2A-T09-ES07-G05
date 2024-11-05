import json
from ibm_watson import SpeechToTextV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from speech_model import SpeechToTextResult

class SpeechService:
    def __init__(self):
        authenticator = IAMAuthenticator('Mj6R80T-xGAZ4wSfwtfY5RNw32aqoMvNsFYq1cyXzo3w')
        self.speech_to_text = SpeechToTextV1(authenticator=authenticator)
        self.speech_to_text.set_service_url('https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/4248536e-f8d7-45b2-9dd3-868ed12a952e')

    def convert_speech_to_text(self, audio_file: bytes):
        response = self.speech_to_text.recognize(
            audio=audio_file,
            content_type='audio/wav',
            model='pt-BR_BroadbandModel'
        ).get_result()

        transcription = response['results'][0]['alternatives'][0]['transcript']
        confidence = response['results'][0]['alternatives'][0]['confidence']

        print(transcription)
        return SpeechToTextResult(transcription=transcription, confidence=confidence)
