from flask import Flask
from flask import render_template
from collections import namedtuple
from os import listdir
from os.path import isfile
app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html', tabName="清大資工40周年慶 - 首頁")

@app.route("/activity")
def activity():
    return render_template('activity.html', tabName="系列活動", title="系列活動",  subtitle="")

@app.route("/news")
def news():
    return render_template('news.html', tabName="最新消息", title="系列消息", subtitle="")

@app.route("/album", methods=['GET', 'POST'])
def album():
    """ show the album page"""
    Photo = namedtuple('Photo', ['name', 'src', 'index', 'page'])

    listdir_location = './static/img/photos/'

    photo_srcs = [(listdir_location + imgSrc) for imgSrc in listdir(listdir_location)]
    # print(photoSrcs)

    page_num = 1
    page_photo_count = 40
    photos = [Photo(photo_srcs[index].split('/')[-1], photo_srcs[index], index, page_num / page_photo_count + 1)
              for index in range(len(photo_srcs))]
    print(photos)

    return render_template('album.html', tabName="相簿", title="光陰集錦", subtitle="", photos=photos)

@app.route("/voting")
def voting():
    return render_template('voting.html', tabName="人氣王競賽", title="人氣王競賽", subtitle="")

@app.route("/history")
def history():
    return render_template('history.html', tabName="歷史沿革", title="", subtitle="")

@app.route("/celebrity")
def celebrity():
    return render_template('celebrity.html', tabName="風雲人物", title="風雲人物",  subtitle="傑出校友獎", description="「所謂大學者，非謂有大樓之謂也，有大師之謂也!」 ---- 梅貽琦")

@app.route("/drive")
def drive():
    return render_template('googleDriveApi.html', tabName="google測試", title="",  subtitle="")

@app.route("/yearPhotos")
def yearPhotos():
    return render_template('yearPhotos.html', tabName='歷年系慶合照', title="歷年系慶合照",  subtitle="")


@app.route("/layout")
def layout():
    return render_template('layout.html', tabName="layout", title="layout", subtitle="subtitle", description="this is a small description")

if __name__ == "__main__":
	app.run(host="0.0.0.0", port=8000, debug=True)

