from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')

@app.route("/activity")
def activity():
    return render_template('activity.html')

@app.route("/news")
def news():
    return render_template('news.html')

@app.route("/album")
def album():
    return render_template('album.html')

@app.route("/voting")
def voting():
    return render_template('voting.html')

@app.route("/honorDays")
def honorDays():
    return render_template('HonorDays.html')

@app.route("/drive")
def drive():
    return render_template('googleDriveApi.html')

if __name__ == "__main__":
	app.run(host="0.0.0.0", port=8000, debug=True)

