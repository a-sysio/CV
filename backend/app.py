from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from db import connect, disconnect

app = Flask(__name__)
CORS(app)

@app.route('/all-data', methods=['GET', 'POST'])
def all_data():
    db = connect()
    cursor = db.cursor(dictionary=True)

    if request.method == 'GET':
        data = {}

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

        disconnect(db)
        return jsonify(data)