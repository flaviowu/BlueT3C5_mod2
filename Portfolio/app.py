from flask import Flask, render_template, request, redirect
from flask_mail import Mail, Message

app = Flask(__name__)

mail_settings = {
     'MAIL_SERVER': 'smtp.gmail.com',
     'MAIL_PORT': 465,
     'MAIL_USE_TLS': False,
     'MAIL_USE_SSL': True,
     'MAIL_USERNAME': 'contatoflaviowu@gmail.com',
     'MAIL_PASSWORD':'dpcoftwfordnawdy'
 }

app.config.update(mail_settings)

mail = Mail(app)

class Contato:
     def __init__(self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/projetos')
def projetos():
    return render_template('projetos.html')

@app.route('/habilidades')
def habilidades():
    return render_template('habilidades.html')

@app.route('/contato')
def contato():
    return render_template('contato.html')

@app.route('/send', methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        formContato = Contato(
            request.form['nome'],
            request.form['email'],
            request.form['mensagem']
        )
    
        msg = Message(
            subject = 'Contato do Portfolio',
            sender = app.config.get('MAIL_USERNAME'),
            recipients = [app.config.get('MAIL_USERNAME')],
            body = f'''
                {formContato.nome} com o e-mail {formContato.email}, enviou a
                seguinte mensagem:

                {formContato.mensagem}
            '''
        )
        mail.send(msg)
    return render_template('send.html', formContato=formContato)

if __name__ == '__main__':
   app.run(debug=True)
