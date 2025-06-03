from flask import Flask, render_template, request, redirect, url_for

app = flask(_name__)

# Usuários fictícios para exemplo
usuarios = {
    "aluno1": "senha123",
    "aluno2": "enem2025"
}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/login", methods=["POST"])
def login():
    username = request.form["username"]
    password = request.form["password"]

    if username in usuarios and usuarios[username] == password:
        return f"Bem-vindo, {username}! Você entrou no Escola Quiz."
    else:
        return "Usuário ou senha incorretos. <a href='/'>Tentar novamente</a>"

if _name_ == "_main_":
    app.run(debug=True)