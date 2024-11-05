from fastapi import APIRouter, HTTPException, Body, status
from models.normas_model import create_norma, get_all_normas, search_normas, search_by_arquivo
from schemas.normas_schemas import NormaCreate, NormaSearch
from models.normas_tags_model import create_norma_tag, check_relation_exists
from schemas.normas_tags_schemas import NormaTagCreate
from schemas.tags_schemas import TagCreate
from models.tags_model import create_tag, get_all_tags
from typing import List, Tuple
import httpx
import traceback

router = APIRouter(
    prefix="/normas",
    tags=["normas"]
)

WEBHOOK_URL = "http://127.0.0.1:8080/webhook/busca-normas"

@router.post("/")
async def add_norma(norma: NormaCreate):
    try:
        norma_id = await create_norma(norma.dict())
        return {"message": "Norma criada com sucesso", "id": norma_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/")
async def list_normas():
    try:
        normas = await get_all_normas()
        return normas
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
# Rota de busca usando NormaSearch
@router.post("/search/")
async def search_norma(search_data: NormaSearch):
    try:
        normas = await search_normas(search_data.dict())

        # Se houver resultados, envia para o webhook
        if normas:
            async with httpx.AsyncClient() as client:
                response = await client.post(WEBHOOK_URL, json={"normas": normas})
                
                # Verifica se o envio foi bem-sucedido
                if response.status_code != 200:
                    raise HTTPException(status_code=500, detail="Failed to send data to core webhook")
        
        return normas
    
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))
    
@router.post("/norma-com-tags/", status_code=status.HTTP_201_CREATED)
async def add_norma_with_tags(norma: NormaCreate, tags: List[str]):
    try:
        norma_id = await create_norma(norma.model_dump())

        existing_tags = await get_all_tags()
        existing_tag_names = [tag['nome'].lower() for tag in existing_tags]
        tag_ids = []

        for tag in tags:
            tag_capitalized = tag.capitalize()

            tag_lower = tag_capitalized.lower()
            if tag_lower in existing_tag_names:
                existing_tag = next(t for t in existing_tags if t['nome'].lower() == tag_lower)
                tag_ids.append(existing_tag['id_tag'])
            else:
                new_tag_id = await create_tag({"nome": tag_capitalized})
                tag_ids.append(new_tag_id)

        for tag_id in tag_ids:
            existing_relation = await check_relation_exists(norma_id, tag_id)
            if not existing_relation:
                await create_norma_tag({
                    'id_norma': norma_id,
                    'id_tag': tag_id,
                    'classificacao': True
                })

        return {"message": "Norma e tags criadas/associadas com sucesso", "id_norma": norma_id}

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))
    
@router.post("/search-arquivo/")
async def search_norma_by_arquivo(data: dict = Body(...)):
    try:
        arquivo = data.get("arquivo")
        if not arquivo:
            raise HTTPException(status_code=400, detail="Arquivo não fornecido.")

        found = await search_by_arquivo(arquivo)

        return {"found": found}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

