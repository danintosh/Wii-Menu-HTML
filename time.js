function gettime() {
    time = document.getElementById("time");
    t = new Date();
    min = '';
    if (t.getMinutes() < 10) {
       min = '0' + t.getMinutes()
    }
    else {
        min = t.getMinutes()
    }
    fulltime = t.getHours() + ':' + min;
    time.innerText = fulltime
}

function getdate() {
    date = document.getElementById("date");
    d = new Date();
    let utcday = " "
    if (d.getUTCDay() == 0) {
        utcday = "Sunday";
    }
    if (d.getUTCDay() == 1) {
        utcday = "Sunday";
    }
    if (d.getUTCDay() == 2) {
        utcday = "Monday";
    }
    if (d.getUTCDay() == 3) {
        utcday = "Tuesday";
    }
    if (d.getUTCDay() == 4) {
        utcday = "Wednesday";
    }
    if (d.getUTCDay() == 5) {
        utcday = "Thursday";
    }
    if (d.getUTCDay() == 6) {
        utcday = "Friday";
    }
    if (d.getUTCDay() == 7) {
        utcday = "Saturday";
    }

    let dated = d.getMonth() + 1 + "/" + d.getDate() + " (" + utcday + ")"
    date.innerText = dated;
}