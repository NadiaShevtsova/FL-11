function formatTime(time) {
    let days = (time / (60 * 24));
    let formatDay = Math.floor(days);
    let hours = (time % (24 * 60)) / 60;
    let formatHour = Math.floor(hours);
    let minutes = (time % (24 * 60)) % 60;
    let formatMinute = Math.floor(minutes);

    return formatDay + " day(s) " + formatHour + " hour(s) " + formatMinute + " minute(s)";
}

formatTime(3601);