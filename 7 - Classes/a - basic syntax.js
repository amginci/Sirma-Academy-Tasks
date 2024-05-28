// Declare class
// A class is a template for creating objects
class Cat { // name of the class is using Pascal case (is capitalized)
    constructor(name, petName, age) { // the constructor reminds of a function in its outlook and contains all the properties (parameters) that an object would hold. Count of parameters are not mandatory.
        this.name = name + petName; // this keyword points to the current object and takes the vales from it (firstCat, secondCat etc.)
        this.age = age;
    }
}

// Creating object from class
let firstCat = new Cat('Navcho', 9); // we create new object by putting it in a variable which contains the word new - new instance using Cat class, that contains all the concrete values of the parameters specified
console.log(firstCat);

// Create second object from class
let secondCat = new Cat('Sisa', 14)
console.log(secondCat);

// Create another class
class Dog {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}
let firstDog = new Dog('Sharo', 12);
firstDog.color = 'Brown'; // we can add extra properties to the specific object, however it is not recommended. This is not changing the class
console.log(firstDog);

let secondDog = new Dog('Balkan', 7);
console.log(secondDog); // there isn't a color for Balkan because constructor stayed the same

// instanceof operator
console.log(firstCat instanceof Cat); // checking if firstCat a separate case of Cat? Returns true or false
console.log(firstCat instanceof Dog); // false

let copyCat = {
    name: 'CopyCat',
    age: 5
};
console.log(copyCat instanceof Cat); // false

