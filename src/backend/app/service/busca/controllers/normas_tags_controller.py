from fastapi import APIRouter, HTTPException, Body
from models.normas_tags_model import create_norma_tag, get_all_normas_tags, update_classificacao, get_norma_tag_by_id
from schemas.normas_tags_schemas import NormaTagCreate, NormaTagUpdate
from models.normas_tags_model import get_all_normas_tags
from models.tags_model import get_all_tags
from collections import Counter


router = APIRouter(
    prefix="/normas-tags",
    tags=["normas_tags"]
)

@router.post("/")
async def add_norma_tag(norma_tag: NormaTagCreate):
    try:
        norma_tag_id = await create_norma_tag(norma_tag.dict())
        return {"message": "Norma-Tag criada com sucesso", "id": norma_tag_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/")
async def list_normas_tags():
    try:
        normas_tags = await get_all_normas_tags()
        return normas_tags
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Rota para atualizar a classificação (para true ou false)
@router.put("/{id_norma_tag}")
async def update_norma_tag_classificacao(id_norma_tag: int, update_data: NormaTagUpdate):
    try:
        updated = await update_classificacao(id_norma_tag, update_data.classificacao)
        if updated:
            return {"message": "Classificação atualizada com sucesso"}
        else:
            raise HTTPException(status_code=404, detail="Norma-Tag não encontrada")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.get("/{id_norma}")
async def get_norma_tag(id_norma: int):
    try:
        norma_tag = await get_norma_tag_by_id(id_norma)
        if norma_tag:
            return norma_tag
        else:
            raise HTTPException(status_code=404, detail="Norma-Tag não encontrada")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/top-tags/")
async def top_5_tags():
    try:
        normas_tags = await get_all_normas_tags()
        tags = await get_all_tags()

        if not normas_tags or not tags:
            return []

        tag_counts = Counter([norma['id_tag'] for norma in normas_tags if norma['classificacao']])
        
        top_tags_ids = [tag_id for tag_id, _ in tag_counts.most_common(5)]

        top_tags = [
            {
                "nome": tag['nome'],
                "qtdNormas": tag_counts[tag['id_tag']]
            }
            for tag in tags if tag['id_tag'] in top_tags_ids
        ]
        return top_tags
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))