from flask import Flask
from flask import render_template
from collections import namedtuple
from os import listdir
from os.path import isfile
from os.path import isdir
app = Flask(__name__)

Photo = namedtuple('Photo', ['name', 'src', 'index', 'page'])
albums = [[], [], [], []] 

@app.route("/")
@app.route("/index")
def index():
    """index page"""
    img_loc = "../static/img/photos/"

    photos = [(img_loc+'p'+str(index)+'.jpg') for index in range(1, 7)]
    return render_template('index.html', tabName="清大資工40周年慶 - 首頁", photos=photos, index=True)

@app.route("/activity")
def activity():
    return render_template('activity.html', tabName="系列活動", title="系列活動",  subtitle="心動即行動")

@app.route("/news")
def news():
    return render_template('news.html', tabName="最新消息", title="最新消息", subtitle="開放報名中")

@app.route('/post/<int:post_id>', methods=['GET', 'POST'])
@app.route('/post/', methods=['GET', 'POST'])
def show_post(post_id=1):
    # show the post with the given id, the id is an integer
    return 'Post %d' % post_id

@app.route("/album/", methods=['GET', 'POST'])
@app.route("/album/<int:album_id>&<int:page_id>")
def album(album_id = 1, page_id = 1):
    """ show the album page"""
    if album_id > 0:
        album_id -= 1
    else:
        album_id = 0

    if page_id > 0:
        page_id -= 1
    else:
        page_id = 0
    
    print("album: " + str(album_id) + " page: " + str(page_id))

    dir = './static/img/photos/album' + str(album_id) + '/'

    if len(albums[album_id]) == 0:
        albums[album_id] = getPhotos(dir)

    if len(albums[album_id]) % 40 == 0:
        pages_count = int(len(albums[album_id]) / 40)
    else:
        pages_count = int(len(albums[album_id]) / 40) + 1

    photos = albums[album_id][page_id*40 : (page_id+1)*40]


    print(str(page_id*40) + ", " + str((page_id+1)*40))
    #print(photos)

    return render_template('album.html', tabName="相簿", title="光陰集錦", subtitle="系慶相簿", \
                            album_id = album_id + 1, page_id = page_id + 1, photos=photos, pages_count = pages_count)


@app.route("/voting")
def voting():
    return render_template('voting.html', tabName="人氣王競賽", title="人氣王競賽", subtitle="拍照上傳FB")

@app.route("/history")
def history():
    return render_template('history_tmp.html', tabName="歷史沿革", title="", subtitle="")

@app.route("/celebrity")
def celebrity():
    return render_template('celebrity.html', tabName="風雲人物", title="風雲人物",  subtitle="傑出校友獎")

@app.route("/drive")
def drive():
    return render_template('googleDriveApi.html', tabName="google測試", title="",  subtitle="")

@app.route("/yearPhotos")
def yearPhotos():
    return render_template('yearPhotos.html', tabName='歷年系慶合照', title="歷年系慶合照",  subtitle="")


@app.route("/layout")
def layout():
    return render_template('layout.html', tabName="layout", title="layout", subtitle="subtitle", description="this is a small description")


def getPhotos(dir, photo_count = 0):
    """ GET PHOTOS recursively """
    if isfile(dir):
        return ['.' + dir]
    
    files = listdir(dir)
    photos = []
    page_photo_count = 40
    for photo in files:
        if isfile(dir+photo):
            if photo.endswith('.MOV') or photo.endswith('.db'):
                continue
            photos.append(Photo(photo, '.' + dir + photo, photo_count, photo_count/page_photo_count))
            photo_count += 1
        else:
            photos_tmp = getPhotos(dir + photo + '/', photo_count)
            photos.extend(photos_tmp)
            photo_count += len(photos_tmp) 

    return photos

if __name__ == "__main__":
	app.run(host="0.0.0.0", port=5000, debug=True)

