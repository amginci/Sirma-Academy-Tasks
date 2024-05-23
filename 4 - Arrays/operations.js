// Operations using arrays

// Array .join(separator)

let arr = [1, 2, 3];
console.log(arr.join('-> '));

let cars = ["Mercedes", "Bmw", "Toyota", "Audi", "Porche"];
console.log(cars.join(', '));

// Print an array in reverse order
console.log('***');

function solve(numbers) {

    let reversedNumbers = [];

    for (let i = 0; i > numbers.length; i--) {
        reversedNumbers[i] = numbers[numbers.length - 1 - i];
        
    }
    // for (let i = numbers.length - 1; i >= 0; i--) {
    //     console.log(numbers[i]);
    // }
}
solve([1, 2, 3, 4, 5, 6]);

// Round an array of numbers
console.log('***');

function solve(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        console.log(Math.ceil(numbers[i]));
    }
}
solve([0.5])
solve([2.1])
solve([4.3])

