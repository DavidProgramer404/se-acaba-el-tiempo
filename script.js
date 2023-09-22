function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

setInterval(function () {
    var time = getSecondsSinceStartOfDay();

    var secondsRotation = (time % 60) * 6;
    var minutesRotation = (Math.floor(time / 60) % 60) * 6;
    var hoursRotation = (Math.floor(time / 3600) % 12) * 30;

    document.getElementById('seconds').style.transform = `rotate(${secondsRotation}deg)`;
    document.getElementById('minutes').style.transform = `rotate(${minutesRotation}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hoursRotation}deg)`;
}, 1000);
