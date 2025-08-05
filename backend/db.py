import mysql.connector  # Importuje bibliotekę do obsługi MySQL
import os  # Importuje moduł do obsługi zmiennych środowiskowych

DB_HOST = os.getenv('DB_HOST', 'localhost')  # Adres hosta bazy danych
DB_USER = os.getenv('DB_USER', 'user')       # Nazwa użytkownika bazy danych
DB_PASS = os.getenv('DB_PASS', 'password')   # Hasło do bazy danych
DB_NAME = os.getenv('DB_NAME', 'app')        # Nazwa bazy danych
DB_PORT = int(os.getenv('DB_PORT', 3306))         # Port bazy danych

def connect():                     # Nawiązuje połączenie z bazą danych.
    db = mysql.connector.connect(  # Zwraca obiekt połączenia.
        host=DB_HOST,
        user=DB_USER,
        password=DB_PASS,
        database=DB_NAME,
        port=DB_PORT
    )
    return db

def disconnect(db):  # Zamyka połączenie z bazą danych.
    db.close()