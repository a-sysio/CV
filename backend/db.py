import os
import time

import psycopg2
from psycopg2.extras import RealDictCursor
from psycopg2.extensions import parse_dsn

DATABASE_URL = os.getenv("DATABASE_URL")
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_USER = os.getenv("DB_USER", "user")
DB_PASS = os.getenv("DB_PASS", "password")
DB_NAME = os.getenv("DB_NAME", "app")
DB_PORT = int(os.getenv("DB_PORT", 5432))
DB_CONNECT_RETRIES = int(os.getenv("DB_CONNECT_RETRIES", 10))
DB_CONNECT_DELAY = float(os.getenv("DB_CONNECT_DELAY", 1.5))


def connect():
    last_error = None

    for _ in range(DB_CONNECT_RETRIES):
        try:
            if DATABASE_URL:
                connect_kwargs = parse_dsn(DATABASE_URL)
                connect_kwargs.setdefault("sslmode", os.getenv("DB_SSLMODE", "require"))
                return psycopg2.connect(**connect_kwargs)

            return psycopg2.connect(
                host=DB_HOST,
                user=DB_USER,
                password=DB_PASS,
                dbname=DB_NAME,
                port=DB_PORT,
            )
        except psycopg2.OperationalError as error:
            last_error = error
            time.sleep(DB_CONNECT_DELAY)

    raise last_error


def dict_cursor(db):
    return db.cursor(cursor_factory=RealDictCursor)


def disconnect(db):
    db.close()
