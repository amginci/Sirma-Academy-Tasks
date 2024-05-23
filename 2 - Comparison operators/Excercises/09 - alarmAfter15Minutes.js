function calculateTime(hour, minutes) {
    if (hour <= 23 && minutes < 60) {
        console.log((hour + ":" + (minutes+15)) // +15 minutes
    } else {
        console.log('Invalid time numbers');
    }

}

calculateTime(1, 47); // 2:02
calculateTime(0, 2); // 0:17
calculateTime(23, 59); // 0:14
calculateTime(11, 07); // 11:22
calculateTime(12, 48); // 13.03
