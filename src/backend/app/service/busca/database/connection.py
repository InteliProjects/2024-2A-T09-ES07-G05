import psycopg2
from psycopg2 import pool
import os
from dotenv import load_dotenv

# Carrega as variáveis de ambiente do arquivo .env
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
DATABASE_USER = os.getenv("DATABASE_USER")
DATABASE_PASSWORD = os.getenv("DATABASE_PASSWORD")
DATABASE_NAME = os.getenv("DATABASE_NAME")

class DatabaseConnection:
    def __init__(self):
        self.pool = psycopg2.pool.SimpleConnectionPool(1, 10,
            host=DATABASE_URL,
            user=DATABASE_USER,
            password=DATABASE_PASSWORD,
            database=DATABASE_NAME
        )

    def get_connection(self):
        if self.pool:
            return self.pool.getconn()

    def close_connection(self, conn):
        if self.pool:
            self.pool.putconn(conn)

db_connection = DatabaseConnection()
