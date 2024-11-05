from typing import Optional
from pydantic import BaseModel, Field, field_validator
from typing import List, Tuple

class NormaCreate(BaseModel):
    nome: str = Field(..., min_length=1)
    data_expedicao: str = Field(..., min_length=1)
    descricao: str
    regulador: str 
    revogacao: bool
    arquivo: str
    link_s3: str

# Novo Schema para a busca
class NormaSearch(BaseModel):
    tema: List[str]
    data_expedicao: Optional[List[str]] = None
    regulador: Optional[List[str]] = None
    tags: List[Tuple[str, float]]

    @field_validator('tema', 'tags', mode='before')
    def check_non_empty(cls, v):
        if not v:
            raise ValueError('must not be empty')
        return v