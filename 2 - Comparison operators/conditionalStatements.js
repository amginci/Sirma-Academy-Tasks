// Conditional statements

// If statement
let age = 17;

if (age >= 18) {
    console.log('You are allowed to make a purchase');
}
console.log('End of program');

// Grade check

function checkGrade(grade) {
    if (grade >= 5.5) {
        console.log('Excellent!');
    }
}
checkGrade(4);
checkGrade(5);
checkGrade(6);
checkGrade(3);

// If .. else statement
let city = 'Pleven'
if (city >= 'Sofia') {
    console.log('You can join our onsite session');
} else {
    console.log('You can join our online session');
}

// Larger number

function compareNumbers(first, second) {
    if (first > second) {
        console.log(first);
    } else {
        console.log(second);
    }
}
compareNumbers(2,4);
compareNumbers(-1,-5);

// if-else if-else statements. Only executes one statement - first true condition. If there are many other ifs (not else if) - all are evaluated and printed
let number = 4
if (number < 2) {
    console.log('Lower than 2');
} else if (number < 3) {
    console.log('Lower than 3');
} else if (number < 4) {
    console.log('Lower than 4');
} else {
    console.log('4 or higher');
}

// Numbers in words

function showNumberName(number){
    if (number == 0) {
        console.log('zero');
    } else if (number == 1){
        console.log('one');
    } else if (number == 7){
        console.log('seven');
    } else {console.log('Too big');}
}
showNumberName(7)

// Variable scope
let name;
if (city = 'Pleven'){
    name = 'Pesho';
    {console.log(name);}
    // block scoped variable
} else {
    name= 'Gosho'
}
// console.log(name);

// Face of figure

function calculation(type, dimensionA, dimensionB) {
    let area;
    if (type = 'square') {
        area = dimensionA * dimensionA;

        console.log(area);
    } else  if (type = 'rectangle') {
        area = dimensionA * dimensionB;
    }
    calculation("square", 5);
    calculation("rectangle", 10, 3.5);
    calculation("triangle", 4.5, 20);
    calculation("circle", 10);
    console.log(area.toFixed(2));
}
calculation('square', 5);
calculation('rectangle', 10, 3.5)

// Conditional statement switch cases

function showNumberNameSwitch(number) {
    switch(number){
        case 0:
            console.log('zero');
          
        case 1:
            console.log('one');
         
        case 2:
            console.log('two');
            break;
        case 3:
            console.log('three');
            break;
        default:
            console.log('Too big');
    }

}
showNumberNameSwitch(0);


