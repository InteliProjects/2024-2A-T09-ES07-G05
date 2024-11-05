from database.connection import db_connection

async def create_norma_tag(norma_tag_data):
    conn = db_connection.get_connection()
    try:
        with conn.cursor() as cursor:
            query = """
            INSERT INTO normas_tags (id_norma, id_tag, classificacao)
            VALUES (%s, %s, %s) RETURNING id_norma_tag;
            """
            cursor.execute(query, (
                norma_tag_data['id_norma'], 
                norma_tag_data['id_tag'], 
                norma_tag_data['classificacao']
            ))
            conn.commit()
            return cursor.fetchone()[0]
    finally:
        db_connection.close_connection(conn)

async def get_all_normas_tags():
    conn = db_connection.get_connection()
    try:
        with conn.cursor() as cursor:
            cursor.execute("SELECT id_norma_tag, id_norma, id_tag, classificacao FROM normas_tags")
            rows = cursor.fetchall()
            # Converta as tuplas para dicionários
            normas_tags = [
                {
                    "id_norma_tag": row[0],
                    "id_norma": row[1],
                    "id_tag": row[2],
                    "classificacao": row[3]
                }
                for row in rows
            ]
            return normas_tags
    finally:
        db_connection.close_connection(conn)


# Função para atualizar a classificação de uma norma-tag
async def update_classificacao(id_norma_tag: int, classificacao: bool):
    conn = db_connection.get_connection()
    try:
        with conn.cursor() as cursor:
            query = "UPDATE normas_tags SET classificacao = %s WHERE id_norma_tag = %s"
            cursor.execute(query, (classificacao, id_norma_tag))
            conn.commit()
            return cursor.rowcount > 0  
    finally:
        db_connection.close_connection(conn)

async def get_norma_tag_by_id(id_norma: int):
    conn = db_connection.get_connection()
    try:
        with conn.cursor() as cursor:
            query = "SELECT * FROM normas_tags WHERE id_norma = %s"
            cursor.execute(query, (id_norma,))
            result = cursor.fetchall()  
            print(result)
            if result:
                return result
            else:
                return None
    finally:
        db_connection.close_connection(conn)

async def check_relation_exists(norma_id, tag_id):
    conn = db_connection.get_connection()
    try:
        with conn.cursor() as cursor:
            query = """
            SELECT COUNT(*) FROM normas_tags 
            WHERE id_norma = %s AND id_tag = %s;
            """
            cursor.execute(query, (norma_id, tag_id))
            count = cursor.fetchone()[0]
            return count > 0
    finally:
        db_connection.close_connection(conn)