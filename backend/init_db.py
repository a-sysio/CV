from pathlib import Path

from db import connect, disconnect


SQL_PATH = Path(__file__).with_name("database.sql")


def main():
    db = connect()
    db.autocommit = True

    try:
        with db.cursor() as cursor:
            cursor.execute("SELECT to_regclass('public.me')")
            table_exists = cursor.fetchone()[0] is not None

            if table_exists:
                print("Database already initialized, skipping schema import.")
                return

            sql = SQL_PATH.read_text(encoding="utf-8")
            cursor.execute(sql)
            print("Database initialized from database.sql.")
    finally:
        disconnect(db)


if __name__ == "__main__":
    main()
