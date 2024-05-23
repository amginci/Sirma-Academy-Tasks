function calculateSpeed(d, h, m, s) {
    let hours = h * 60
    let minutes = m / 60
    let seconds = s / 60
    let time = hours + minutes + seconds
    let speed = d / time

    console.log(speed);
}

calculateSpeed(100, 1, 20, 20)