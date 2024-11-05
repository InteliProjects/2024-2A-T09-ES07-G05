from fastapi import APIRouter, HTTPException, Body
from models.tags_model import create_tag, get_all_tags, delete_tag
from schemas.tags_schemas import TagCreate

router = APIRouter(
    prefix="/tags",
    tags=["tags"]
)

@router.post("/")
async def add_tag(tag: TagCreate):
    try:
        tag.nome = tag.nome.capitalize()

        existing_tags = await get_all_tags()
        if any(existing_tag['nome'].lower() == tag.nome.lower() for existing_tag in existing_tags):
            raise HTTPException(status_code=409, detail="Tag já existe.")
        
        tag_id = await create_tag(tag.dict())
        return {"message": "Tag criada com sucesso", "id": tag_id}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/")
async def list_tags():
    try:
        tags = await get_all_tags()
        return tags
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@router.delete("/{id_tag}")
async def exclude_tag(id_tag: int):
    result = await delete_tag(id_tag)
    if result:
        return {"message": "Tag deletada com sucesso."}
    else:
        raise HTTPException(status_code=404, detail="Tag não encontrada ou falha na deleção.")

