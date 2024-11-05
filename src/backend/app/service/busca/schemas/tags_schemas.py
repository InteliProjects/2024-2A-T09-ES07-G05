from pydantic import BaseModel, Field

class TagCreate(BaseModel):
    nome: str = Field(..., min_length=1)
