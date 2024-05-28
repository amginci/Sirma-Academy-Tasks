// Declare class
// A class is a template for creating objects
class Cat { // name of the class is using Pascal case (is capitalized)
    constructor(name, age) { // the constructor reminds of a function in its outlook and contains all the properties (parameters) that an object would hold
        this.name = name; // this keyword points to the current object and takes the vales from it (firstCat, secondCat etc.)
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
firstDog.color = 'Brown'; // we can add properties to the object but not changing the constructor
console.log(firstDog);

// instanceof operator
console.log(firstCat instanceof Cat); // is firstCat a separate case of Cat? Returns true or false
console.log(firstCat instanceof Dog); // false