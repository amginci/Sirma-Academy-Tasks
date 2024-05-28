function reverseNumber(n) {
    // Get digits value, first convert it to string
    let nStr = n.toString()
    // Create an empty string to hold the values of reversed number (which is still a string)
    let reversedStr = ''
    // Read them in the opposite direction: start is last digit, end is the first and direction is backwards
    for (let i = nStr.length - 1; i >= 0; i--) {
        reversedStr += nStr[i];
    }
    let reversedNumber = parseInt(reversedStr);
    console.log(reversedNumber);
}
reverseNumber(321);
reverseNumber(9876);
reverseNumber(505);
reverseNumber(30201);
reverseNumber(7);