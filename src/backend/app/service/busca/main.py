from fastapi import FastAPI
from controllers.normas_controller import router as normas_router
from controllers.tags_controller import router as tags_router
from controllers.normas_tags_controller import router as normas_tags_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todas as origens.
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

app.include_router(normas_router)
app.include_router(tags_router)
app.include_router(normas_tags_router)

@app.get("/")
def root():
    return {"message": "API para Gerenciamento de Normas e Tags"}
