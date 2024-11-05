from speech_service import SpeechService

class SpeechController:
    def __init__(self):
        self.speech_service = SpeechService()

    async def process_audio(self, audio_file: bytes):
        return self.speech_service.convert_speech_to_text(audio_file)
