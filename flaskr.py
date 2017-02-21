from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html', title="清大資工40周年慶 - 首頁")

@app.route("/activity")
def activity():
    return render_template('activity.html', title="系列活動")

@app.route("/news")
def news():
    return render_template('news.html', title="最新消息")

@app.route("/album")
def album():
    return render_template('album.html', title="相簿")

@app.route("/voting")
def voting():
    return render_template('voting.html', title="人氣王競賽")

@app.route("/history")
def history():
    return render_template('history.html', title="歷史沿革")

@app.route("/celebrity")
def celebrity():
    return render_template('celebrity.html', title="風雲人物")

@app.route("/drive")
def drive():
    return render_template('googleDriveApi.html', title="google測試")

@app.route("/yearPhotos")
def yearPhotos():
    return render_template('yearPhotos.html', title='歷年系慶合照')

def drive():
    return render_template('googleDriveApi.html', title="google測試")

@app.route("/layout")
def layout():
    return render_template('layout.html', title="layout")

if __name__ == "__main__":
	app.run(host="0.0.0.0", port=8000, debug=True)

