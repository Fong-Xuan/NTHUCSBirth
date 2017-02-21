class ScheduleRow {
    constructor(time, title, description, location, link){
        this.time = time;
        this.title = title;
        this.description = description;
        this.location = location;
        this.link = link;
    }

}
class ActivityRow {
    constructor(name, description, time, location, more){
        this.name = name;
        this.description = description;
        this.time = time;
        this.location = location;
        this.more = more;
    }
}
var activityRows = new Array();
var des = "攝影師將於舞台前主視覺--四十週年紀念看板前幫各級系友拍團體照留念。可立即上傳並分享至四十週年粉絲專頁活動網頁按讚！</br>\
設有自拍機可立即將照片列印留存唷！</br>\
拍照最多人數的系級以及按讚數最多的系級將可獲頒最佳人氣獎！（以當天下午2點前之按讚數來評比）"
var more = "<a href='url_for('voting')'>最佳人氣講獎</a>";
var loc = "台達館一樓中庭"
activityRows.push(new ActivityRow("各級系友紀念團拍", des, "4/23 9:30~16:00", loc, more));

des = "請師長、系友、同學報到領取精美好禮</br>\
好禮大放送：</br>\
第一重：40週年紀念對杯</br>\
第二重：早到禮園遊券100份（面額NT：100元）</br>\
第三重：填問卷+理監事圈選投票禮</br>\
第四重：系友惠賜名片禮";
more = "四十週年紀念杯搶先看"
activityRows.push(new ActivityRow("資工40暨資應所系所友回娘家交流活動及午宴", des, "4/23 9:30~14:00", loc, more));

des = ""
more = "歡迎各級畢業系友預約教室開同學會，敬請班級聯絡人請於4/14(五)前至以下網站預約開同學會教室，謝謝您。</br> \
<a href='http://csalumni.web.nthu.edu.tw/files/87-1209-2102.php?Lang=zh-tw'> 點此預約</a>";
loc = "資電、台達館";
activityRows.push(new ActivityRow("歡樂同學會", des, "4/23 14:00~16:00", loc, more));

more="歡迎師長、系友、在校資工系學生、資應所學生、教職員報名卡拉OK一同歡唱。</br>\
為確保活動能順利進行，請欲歡唱的師長、系友、在校生上網報名。</br>\
活動當天請於舞台旁的卡拉OK處找工作人員先行點歌唷！</br>\
<a href='http://csalumni.web.nthu.edu.tw/files/87-1209-2103.php?Lang=zh-tw'>報名點此</a>";
loc = "台達館一樓中庭";
activityRows.push(new ActivityRow("歡唱卡啦OK", des, "4/23 13:00~16:00", loc, more));

more = "歡迎師長、系友攜家帶眷一同進教室聆聽親子專家說故事的單元，</br>\
並於說故事之後進行一段精彩的魔術氣球秀。</br> <a href='http://csalumni.web.nthu.edu.tw/files/87-1209-2104.php?Lang=zh-tw'> 點此報名 </a>";
des = "親子專家說故事、親子勞作";
loc = "台達館107教室";
activityRows.push(new ActivityRow("故事樂園/魔術氣球", des, "4/23 14:00~16:00", loc, more));


var scheduleRows = new Array();

des = "V請師長、系友、同學報到領取精美好禮</br>\
V歡迎各級系友於四十週年紀念框前拍照留念，</br>\
分享按讚，將有機會獲得最佳人氣獎</br>\
**好禮3重送：</br>\
第一重：早到禮園遊券100份（面額NT：100元）</br>\
第二重：填問卷+理監事圈選投票禮</br>\
第三重：系友惠賜名片禮";
scheduleRows.push(new  ScheduleRow("09:30~10:00", "報到", des, "台達館1樓中庭", ""));
des = "李家同校長、劉炯朗校長、陳文村校長、唐傳義校長(暫定)"; 
scheduleRows.push(new  ScheduleRow("10:00~10:30", "貴賓致詞", des, "台達館105教室", ""));
des = "系友會會務報告-胡大雄會長</br>\
資工系及資應所現況分享-</br>\
系主任賴尚宏教授、王廷基所長";
scheduleRows.push(new  ScheduleRow("10:30~10:40", "開幕致詞", des, "台達館105教室", " "));
des = "1. 資工系成立四十週年紀念影片特輯</br>\
2. 傑出校友頒獎";
scheduleRows.push(new  ScheduleRow("10:40~11:05", "往事回味", des, "台達館105教室", " "));
des = "李家同校長或劉炯朗校長(暫定) ";
scheduleRows.push(new  ScheduleRow("11:05~11:35", "專題演講", des, "台達館105教室", " "));
des = ""; 
scheduleRows.push(new  ScheduleRow("11:35~12:00", "系友創業分享", des, "台達館105教室", " "));
des = "美味buffet</br>\
頒發最佳人氣獎-以各系級大團圓照人數來評比</br>\
公布第四屆系友會理監事並頒發證書";
scheduleRows.push(new  ScheduleRow("12:00~14:00", "午宴", des, "台達館1樓", ""));
des = "遴選第四屆系友會正副會長</br>\
討論年度系友會活動</br>\
台達館525會議室";
scheduleRows.push(new  ScheduleRow("14:00~15:00", "第三屆及第四屆理監事交接會議", des, "台達館525會議室", " "));
des  = "";
scheduleRows.push(new  ScheduleRow("13:10~16:00", "歡唱卡啦OK", des, " ", " "));
des = "親子專家說故事、親子勞作";
scheduleRows.push(new  ScheduleRow("14:00~15:00", "故事樂園", des, "台達館107教室", " "));
des = "";
scheduleRows.push(new  ScheduleRow("15:00~16:00", "魔術氣球秀", des, "台達館107教室", " "));


var activityBody = document.getElementById("activityBody");
if(activityBody){
    for(var i in activityRows){
        var tr = document.createElement("tr");
        tr.innerHTML = "\
            <th scope='row'>"+activityRows[i].name+"</th>\n\
            <td>"+activityRows[i].description+"</td>\n\
            <td>"+activityRows[i].time+"</td>\n\
            <td>"+activityRows[i].location+"</td>\n\
            <td>"+activityRows[i].more+"</td>\n\
        "
        activityBody.appendChild(tr);
    }
}
else {
    var scheduleBody = document.getElementById("scheduleBody_index");
    for(var i=0; i<5; i++){
        var tr = document.createElement("tr");
        console.log(i);
        tr.innerHTML = "\
            <th scope='row' style='color:#800080'>"+activityRows[i].name+"</th>\n\
            <td>"+activityRows[i].time+"</td>\n\
            <td>"+activityRows[i].location+"</td>\n\
        "
    scheduleBody.appendChild(tr);
    }
}


var scheduleBody = document.getElementById("scheduleBody");
if(scheduleBody){
    for(var i in scheduleRows){
        var tr = document.createElement("tr");
        tr.innerHTML = "\
            <th scope='row'>"+scheduleRows[i].time+"</th>\n\
            <td>"+scheduleRows[i].title+"</td>\n\
            <td>"+scheduleRows[i].description+"</td>\n\
            <td>"+scheduleRows[i].location+"</td>\n\
            <td>"+scheduleRows[i].link+"</td>\n\
        "
        scheduleBody.appendChild(tr);
    }
}


