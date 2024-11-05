from database.connection import db_connection
from psycopg2.extras import RealDictCursor

async def create_tag(tag_data):
    conn = db_connection.get_connection()
    try:
        with conn.cursor() as cursor:
            query = "INSERT INTO tags (nome) VALUES (%s) RETURNING id_tag;"
            cursor.execute(query, (tag_data['nome'],))
            conn.commit()
            return cursor.fetchone()[0]
    finally:
        db_connection.close_connection(conn)

async def get_all_tags():
    conn = db_connection.get_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute("SELECT * FROM tags")
            return cursor.fetchall()
    finally:
        db_connection.close_connection(conn)

async def delete_tag(id_tag: int):
    conn = db_connection.get_connection()
    try:
        with conn.cursor() as cursor:
            delete_relations_query = "DELETE FROM normas_tags WHERE id_tag = %s"
            cursor.execute(delete_relations_query, (id_tag,))
            
            delete_tag_query = "DELETE FROM tags WHERE id_tag = %s"
            cursor.execute(delete_tag_query, (id_tag,))
            
            conn.commit()
            return cursor.rowcount > 0
    finally:
        db_connection.close_connection(conn)