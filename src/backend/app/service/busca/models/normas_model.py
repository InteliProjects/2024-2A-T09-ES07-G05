from database.connection import db_connection
from psycopg2.extras import RealDictCursor
from datetime import datetime

# Função para criar uma nova norma
async def create_norma(norma_data):
    conn = db_connection.get_connection()
    try:
        with conn.cursor() as cursor:
            query = """
            INSERT INTO normas (nome, data_expedicao, descricao, regulador, revogacao, arquivo, link_s3)
            VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING id_norma;
            """
            cursor.execute(query, (
                norma_data['nome'], 
                norma_data['data_expedicao'], 
                norma_data['descricao'], 
                norma_data['regulador'], 
                norma_data['revogacao'], 
                norma_data['arquivo'],
                norma_data['link_s3']
            ))
            conn.commit()
            return cursor.fetchone()[0]
    finally:
        db_connection.close_connection(conn)

# Função para obter todas as normas com suas respectivas tags
async def get_all_normas():
    conn = db_connection.get_connection()
    try:
        query = """
            SELECT n.*, t.nome AS tag_nome
            FROM normas n
            LEFT JOIN normas_tags nt ON n.id_norma = nt.id_norma
            LEFT JOIN tags t ON nt.id_tag = t.id_tag;
        """
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute(query)
            results = cursor.fetchall()

        # Agrupar as normas com suas respectivas tags
        normas_dict = {}
        for row in results:
            id_norma = row['id_norma']
            if id_norma not in normas_dict:
                normas_dict[id_norma] = {
                    "id_norma": row['id_norma'],
                    "nome": row['nome'],
                    "data_expedicao": row['data_expedicao'],
                    "descricao": row['descricao'],
                    "regulador": row['regulador'],
                    "revogacao": row['revogacao'],
                    "arquivo": row['arquivo'],
                    "link_s3": row['link_s3'],
                    "tags": []
                }
            # Adicionar a tag associada à norma
            if row['tag_nome']:
                normas_dict[id_norma]['tags'].append(row['tag_nome'])

        # Converter de dict para uma lista de normas
        normas_list = list(normas_dict.values())

        return normas_list

    finally:
        db_connection.close_connection(conn)

# Função para buscar normas com base nos critérios de pesquisa e exibir tags associadas
async def search_normas(search_data):
    conn = db_connection.get_connection()
    
    try:
        # Separar os dados do dicionário
        tema = search_data['tema']
        data_expedicao = search_data['data_expedicao']
        regulador = search_data['regulador']
        tags = search_data['tags']

        # Combinar tema e tags em uma única lista "temas"
        temas = tema + [tag[0] for tag in tags]  # Combina o tema e as tags

        # Base da query para buscar normas e suas tags associadas
        query = """
            SELECT DISTINCT n.*, t.id_tag, t.nome AS tag_nome FROM normas n
            LEFT JOIN normas_tags nt ON n.id_norma = nt.id_norma
            LEFT JOIN tags t ON nt.id_tag = t.id_tag
            WHERE 1=1
        """
        
        # Lista de parâmetros
        params = []

        # Filtrar por tema (procurar no nome ou descrição)
        if temas:
            tema_conditions = []
            
            # Iterar sobre todos os temas
            for t in temas:
                tema_conditions.append("(n.nome ILIKE %s OR n.descricao ILIKE %s)")
                params.append(f'%{t}%')  # Buscar por tema no nome
                params.append(f'%{t}%')  # Buscar por tema na descrição

            # Combinar todas as condições de tema com OR
            if tema_conditions:
                query += " AND (" + " OR ".join(tema_conditions) + ")"

        # Filtrar por data de expedição, se fornecida e fazer conversão de formato
        if data_expedicao and data_expedicao[0]:
            try:
                # Converte a data de 'DD/MM/YYYY' para 'YYYY-MM-DD'
                data_expedicao_formatada = datetime.strptime(data_expedicao[0], '%d/%m/%Y').strftime('%Y-%m-%d')
                query += " AND n.data_expedicao = %s"
                params.append(data_expedicao_formatada)
            except ValueError:
                pass  # Ignora a data se a conversão falhar

        # Filtrar por regulador
        if regulador:
            query += " AND n.regulador ILIKE %s"
            params.append(f'%{regulador[0]}%')

        # Executar a query com os parâmetros
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute(query, params)
            results = cursor.fetchall()

        # Agrupar as normas com suas respectivas tags (id e nome)
        normas_dict = {}
        for row in results:
            id_norma = row['id_norma']
            if id_norma not in normas_dict:
                normas_dict[id_norma] = {
                    "id_norma": row['id_norma'],
                    "nome": row['nome'],
                    "data_expedicao": row['data_expedicao'],
                    "descricao": row['descricao'],
                    "regulador": row['regulador'],
                    "revogacao": row['revogacao'],
                    "arquivo": row['arquivo'],
                    "tags": [],  # Lista para armazenar tanto o id quanto o nome das tags
                    "tema": tema[0]
                }
            # Adicionar a tag associada à norma (id e nome da tag)
            if row['tag_nome']:
                normas_dict[id_norma]['tags'].append({
                    "id_tag": row['id_tag'],
                    "nome": row['tag_nome']
                })

        # Converter de dict para uma lista de normas
        normas_list = list(normas_dict.values())

        return normas_list

    finally:
        db_connection.close_connection(conn)

async def search_by_arquivo(arquivo: str):
    conn = db_connection.get_connection()
    try:
        with conn.cursor() as cursor:
            query = """
            SELECT EXISTS(SELECT 1 FROM normas WHERE arquivo = %s);
            """
            cursor.execute(query, (arquivo,))
            result = cursor.fetchone()[0]  # Retorna True se encontrar, False se não
            return result
    finally:
        db_connection.close_connection(conn)


