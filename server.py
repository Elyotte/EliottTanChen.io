from flask import Flask

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.after_request
def no_cache(response):
    if app.debug:
        response.headers["Cache-Control"] = "no-store"
    return response

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)