function minutesToHour(min) {
    let hours = Math.trunc(min/60); // Returns the integer part of a number by removing any fractional digits.
    let minutes = min % 60; // Returns the integer remainder of dividing two operands.
    console.log(hours + ':' + minutes);
}
minutesToHour(60);
minutesToHour(90);
minutesToHour(325);