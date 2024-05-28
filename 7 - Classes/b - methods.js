// Functions in a class

// Object method notation recap
let obj = {
    propName: 'propValue', // comma
    method() {
        console.log('Method execution');
    }, // comma here
}

// Add method to class
class Cat {
    constructor(name, age) {
        this.name = name; // semicolon
        this.age = age; // semicolon
    } // no comma here
    makeSound() {
        console.log(this.name + ': Meow...');
    }
    static catSound() { // general method for all instances
        console.log('Meow');
    }
}
const firstCat = new Cat('Navcho', 9);
const secondCat = new Cat('Sisa', 14);

firstCat.makeSound(); // calling the method inside the class for the current instance
secondCat.makeSound();

// Static method usage
Cat.catSound(); // access only through the class itself. General bahaviour (method)
