function hoursAndMinutes(min) {
    let convertMinutesToHours = Math.floor(min / 60) + ':' + min % 60;
    console.log(convertMinutesToHours);
}
hoursAndMinutes(60)
hoursAndMinutes(90)
hoursAndMinutes(325)