from flask import Flask, jsonify, render_template
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# conexão com o banco (igual ao seu código)
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Mariany20@",
    database="quiz_enem"
)

@app.route('/materias')
def home():
    return render_template('matematica.html')

@app.route('/api/perguntas', methods=['GET'])
def perguntas():
    cursor = db.cursor(dictionary=True)
    query = """
    SELECT q.id, q.enunciado, q.correta, a.letra, a.texto
    FROM questoes q
    JOIN alternativas a ON q.id = a.questao_id
    ORDER BY q.id, a.letra
    """
    cursor.execute(query)
    rows = cursor.fetchall()

    perguntas_dict = {}
    for row in rows:
        qid = row['id']
        if qid not in perguntas_dict:
            perguntas_dict[qid] = {
                'id': qid,
                'enunciado': row['enunciado'],
                'correta': row['correta'],
                'alternativas': []
            }
        perguntas_dict[qid]['alternativas'].append({
            'letra': row['letra'],
            'texto': row['texto']
        })

    perguntas_list = list(perguntas_dict.values())
    return jsonify(perguntas_list)

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
