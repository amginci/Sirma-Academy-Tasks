// Arithmetic operations
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);

// Assign operation result to variable
let sum = 10 + 20;
console.log(sum);


// Using arithmetic operations in a function
function solve(a, b){
    let sum = a + b;
    let subtract = a - b;
    let multiply = a * b;
    let divide = a / b;

    console.log('---------');
    console.log(sum);
    console.log(subtract);
    console.log(multiply);
    console.log(divide);
    console.log('---------');
}
solve(2,5)

// Concatenation
let name = 'Maggie';
let greeting = 'Hi there, ' + name + '!';

console.log(greeting);

// Concatenation with number
console.log(10 + '10');
console.log(10 - '10'); // coercion - string becomes a number

// Edge case
let a = 3.14
let b = 5.35

console.log('The sum is: ' + a + b); //The sum is: 3.145.35
// Would be different from
console.log(a + b + ' is the sum'); //8.49 is the sum
// JS reads the code from left to right

// Round integers
console.log(Math.round(3.145)); // to closest whole number
console.log(Math.ceil(3.14)); //to next whole number (ceiling)
console.log(Math.floor(3.14)); // to previous whole number
let chislo = 3.123353
console.log(chislo.toFixed(2)); //set the number of decimal values, adds 0 if less fixed numbers, rounds if exact fixed numbers

