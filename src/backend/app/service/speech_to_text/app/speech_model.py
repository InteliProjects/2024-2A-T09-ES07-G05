from pydantic import BaseModel

class SpeechToTextResult(BaseModel):
    transcription: str
    confidence: float
