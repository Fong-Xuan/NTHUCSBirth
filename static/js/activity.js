class ScheduleRow {
    constructor(time, title, description, location, link){
        this.time = time;
        this.title = title;
        this.description = description;
        this.location = location;
        this.link = link;

    }

}


var scheduleRows = new Array();

var des = "V請師長、系友、同學報到領取精美好禮</br>\
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

var s = scheduleRows[0];

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
else {

    var scheduleBody = document.getElementById("scheduleBody_index");
    for(var i=0; i<5; i++){
        var tr = document.createElement("tr");
        console.log(i);
        tr.innerHTML = "\
            <td scope='row'>"+scheduleRows[i].time+"</td>\n\
            <td>"+scheduleRows[i].title+"</td>\n\
            <td>"+scheduleRows[i].description+"</td>\n\
            <td>"+scheduleRows[i].location+"</td>\n\
            <td>"+scheduleRows[i].link+"</td>\n\
        "
    scheduleBody.appendChild(tr);
    }
}