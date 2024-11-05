from fastapi import FastAPI, UploadFile, File
from speech_controller import SpeechController
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "*" 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Origens permitidas
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos HTTP
    allow_headers=["*"],  # Permite todos os cabeçalhos
)


speech_controller = SpeechController()

@app.post("/speech-to-text/")
async def speech_to_text(file: UploadFile = File(...)):
    audio_data = await file.read()
    return await speech_controller.process_audio(audio_data)
