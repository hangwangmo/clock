const timeDiv = document.getElementById("clock");
const dateDiv = document.getElementById("date");

function getCalendarTime() {

    const dayList = ["일","월","화","수","목","금","토"];

    let now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let dayNumber = now.getDay();

    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let noon = "AM";

    if(hour > 11) {
        noon = "PM"
        hour = hour - 12;
        if(hour == 0) {
            hour = 12;
        }
    }

    dateDiv.textContent = year + "-" + formatNumber(month) + "-" + formatNumber(day) + " " + dayList[dayNumber];
    timeDiv.textContent = noon + " " + formatNumber(hour) + ":" + formatNumber(minutes) + ":" + formatNumber(seconds);

    dateDiv.style.color = "red";
    timeDiv.style.color = "blue";

    dateDiv.style.fontSize = "30px";
    timeDiv.style.fontSize = "50px";
}

function formatNumber(number) {
    if(number<10) {
        return "0" + number;
    }

    return number;
}

getCalendarTime();

setInterval(function() {
    getCalendarTime();
}, 1000);