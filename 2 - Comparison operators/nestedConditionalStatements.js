// Nested conditional statements

let city = 'Sofia';
let isVip = false;

if (city == 'Sofia') {
    console.log('You can join our on-site session');
    if(isVip) {
        console.log('You purchased VIP ticket for the event');
    } else {
        console.log('You purchased regular ticket.');
    }
} else {
    console.log('You can watch us online');
}
console.log('End of purchase');

// Address by Age and Gender

function printReference(age, gender) {
    if (gender == 'm') {
        if (age >= 21) {
            console.log('Mr.');
        } else {
            console.log('Master');
        }
    } else {
        if (age >= 21) {
            console.log('Mrs.');
        } else {
            console.log('Miss');
        }
    }
}
printReference(19, 'f')