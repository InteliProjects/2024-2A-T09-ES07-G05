from pydantic import BaseModel, Field

class NormaTagCreate(BaseModel):
    id_norma: int
    id_tag: int
    classificacao: bool

# Schema para atualização de classificação
class NormaTagUpdate(BaseModel):
    classificacao: bool
