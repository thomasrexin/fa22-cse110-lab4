let d;
let time;
let interval;

function changeTime() {
    interval = setInterval(printTime, 1000);
}

function printTime() {
    d = new Date();
    time = d.toLocaleTimeString();
    console.log(time);
}

changeTime();