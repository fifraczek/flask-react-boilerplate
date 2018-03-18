from flask import Flask, render_template, jsonify

app = Flask(__name__, template_folder="front/build", static_folder='front/build/static')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/api/proxy_test')
def test_call():
    return 'Proxy working'


if __name__ == '__main__':
    app.run()
