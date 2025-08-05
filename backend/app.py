from flask import Flask, request, jsonify, Response, send_from_directory
from flask_cors import CORS
from db import connect, disconnect
import os

# Tworzymy instancję aplikacji Flask
app = Flask(__name__)

# Włączamy CORS, aby umożliwić komunikację między frontendem a backendem (np. różne porty)
CORS(app)

# ================================================================
# Endpoint: /all-data
# Metody: GET
# Opis: Pobiera wszystkie dane z bazy (me, skills, languages, experience, education,
#       certificates, soft_skills, social_media) i zwraca je jako jeden obiekt JSON.
# ================================================================
@app.route('/all-data', methods=['GET'])
def all_data():
    # Nawiązujemy połączenie z bazą
    db = connect()
    cursor = db.cursor(dictionary=True)  # Wyniki w formie słowników, a nie krotek

    # Tworzymy pusty słownik na dane
    data = {}

    # Pobieramy dane z każdej tabeli
    cursor.execute("SELECT * FROM me ORDER BY id DESC")
    data['me'] = cursor.fetchall()
    
    cursor.execute("SELECT * FROM skills ORDER BY id DESC")
    data['skills'] = cursor.fetchall()

    cursor.execute("SELECT * FROM languages ORDER BY id DESC")
    data['languages'] = cursor.fetchall()

    cursor.execute("SELECT * FROM experience ORDER BY id DESC")
    data['experience'] = cursor.fetchall()

    cursor.execute("SELECT * FROM education ORDER BY id DESC")
    data['education'] = cursor.fetchall()

    cursor.execute("SELECT * FROM certificates ORDER BY id DESC")
    data['certificates'] = cursor.fetchall()

    cursor.execute("SELECT * FROM soft_skills ORDER BY id DESC")
    data['soft_skills'] = cursor.fetchall()

    cursor.execute("SELECT * FROM social_media ORDER BY id DESC")
    data['social_media'] = cursor.fetchall()

    # Zamykanie połączenia z bazą
    disconnect(db)

    # Zwracamy dane w formacie JSON
    return jsonify(data)

# ================================================================
# Endpoint: /download-cv
# Metody: GET
# Opis: Wysyła plik PDF z folderu static do pobrania przez użytkownika.
# ================================================================
@app.route('/download-cv', methods=['GET'])
def download_cv():
    # Pełna ścieżka do folderu 'static'
    static_folder = os.path.join(app.root_path, 'static')
    
    # Nazwa pliku PDF w folderze 'static'
    filename = 'cv.pdf'
    
    # Wysyłamy plik do przeglądarki jako pobieranie (as_attachment=True)
    return send_from_directory(static_folder, filename, as_attachment=True)

# ================================================================
# Uruchomienie aplikacji
# ================================================================
if __name__ == '__main__':
    # host='0.0.0.0' -> aplikacja dostępna w całej sieci lokalnej
    # port=3000 -> aplikacja działa na porcie 3000
    # debug=True -> tryb deweloperski z automatycznym restartem przy zmianach w kodzie
    app.run(host='0.0.0.0', port=3000, debug=True)
