from flask import Flask, render_template_string
import os

app = Flask(__name__, static_folder=os.getcwd())
print(__name__)


@app.route('/')
def github_io():
    with open("index.html", "r") as f:
        html_code = f.read()
        f.close()
    return render_template_string(html_code)

@app.route('/static/script.js')
def serve_static(filename):
    return send_from_directory(os.getcwd(), filename)

if __name__ == "__main__":
    app.run(debug=True)
