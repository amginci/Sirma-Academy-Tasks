function checkRange (number) {
 if (number >= -100 && number <= 100 && number != 0) {
    console.log('Yes');
 } else {
    console.log('No');
 }
}
checkRange(-25);
checkRange(0);
checkRange(25);