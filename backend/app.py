import os

from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

from db import connect, dict_cursor, disconnect

app = Flask(__name__)
CORS(app)


@app.route("/all-data", methods=["GET"])
def all_data():
    db = connect()
    cursor = dict_cursor(db)

    data = {}

    cursor.execute("SELECT * FROM me ORDER BY id DESC")
    data["me"] = cursor.fetchall()

    cursor.execute("SELECT * FROM skills ORDER BY id DESC")
    data["skills"] = cursor.fetchall()

    cursor.execute("SELECT * FROM languages ORDER BY id DESC")
    data["languages"] = cursor.fetchall()

    cursor.execute("SELECT * FROM experience ORDER BY id DESC")
    data["experience"] = cursor.fetchall()

    cursor.execute("SELECT * FROM education ORDER BY id DESC")
    data["education"] = cursor.fetchall()

    cursor.execute("SELECT * FROM certificates ORDER BY id DESC")
    data["certificates"] = cursor.fetchall()

    cursor.execute("SELECT * FROM soft_skills ORDER BY id DESC")
    data["soft_skills"] = cursor.fetchall()

    cursor.execute("SELECT * FROM social_media ORDER BY id DESC")
    data["social_media"] = cursor.fetchall()

    cursor.execute("SELECT * FROM contact ORDER BY id DESC")
    data["contact"] = cursor.fetchall()

    cursor.execute("SELECT * FROM projects ORDER BY id ASC")
    data["projects"] = cursor.fetchall()

    disconnect(db)

    return jsonify(data)


@app.route("/download-cv", methods=["GET"])
def download_cv():
    static_folder = os.path.join(app.root_path, "static")
    return send_from_directory(static_folder, "cv.pdf", as_attachment=True)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)
