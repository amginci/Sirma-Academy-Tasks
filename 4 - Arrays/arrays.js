// Arrays are task lists. Ways to unify data

// list of srudents

let firstStudent = "name";
let secondStudent = "name1";
let thirdStudent = "name2";
let forthStudent = "name3";
let fifthStudent = "name4";
let sicthStudent = "name5";

// print all students
console.log("name1");
console.log("name2");
console.log("name3");
console.log("name4");
console.log("name5");
console.log("name6");

// sort students..
let students = ["Alex", "Velizar", "Boyko", "Georgi"];
// Create an empty array
let elements = [];

// Access element in an array
console.log(students[1]);

let toys = ["bear", "truck", "doll", "box", "car"];
//toyIndex: 0, 1, 2, 3, 4 -> last index n - 1, first is 0

// create numbers array
let numbers = [10, 20, 30, 40];
console.log("numbers");

let names = ["Pesho", "Gosho", "Stamat"];
console.log(names);

let booleans = [true, true, false];
console.log(booleans);

// replace element
students[1] = "Georgi";
console.log(names);

// Loop  throught an array

let cars = ["Mercedes", "Bmw", "Toyota", "Audi", "Porche"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);
// console.log(cars[4]);

// print using for

// let index = 3;
// console.log(names[index]);
console.log('---------');
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
// print all students
console.log('---------');
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// Day of the week
console.log('----------');
function weekDay(number) {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (weekDays[number - 1]) {
    console.log(weekDays[number - 1]);
  } else {
    console.log('Invalid number');
  }
}
weekDay(3);


// Sum first and last

function solve(input) {
  // get first and last elements
  let firstElement = input[0];
  let lastElement = input[input.length - 1];
  // convert elements to number§s
  let firstNumber = Number(firstElement); //+firstElement
  let lastNumber = Number(lastElement);

  // sum numbers
  let result = firstNumber + lastNumber;
  // print results
}
solve("20", "30", "40");


