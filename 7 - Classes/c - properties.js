// Adding properties to class
class Cat {
    // Add instance property
    legCount = 4; // all instances will have that property with default value (or not)

    // Add static propety
    static eyeCount = 2;

    // Add private property
    #internalProp = 'Secret';

    // Add static private property

    static #staticInternalProp = 'Hideout';

    constructor(name, age) {
        this.name = name; // semicolon
        this.age = age; // semicolon
    } // no comma here

    // Instance method
    makeSound() {
        console.log(this.name + ': Meow...');
        console.log(this.#internalProp); // we can't use provate property outside class. It's available only inside
    }

    // Instance private method
    #someMethod() {
        console.log('Private Method');
    }

    // Static method
    static catSound() { // general method for all instances
        console.log('Meow');
        // console.log(Cat.eyeCount);
        // console.log(this.eyeCount);
    }

    // Private static method
    static #privateStatic() {
        console.log('Private static');
    }
}

let firstCat = new Cat('Shani', 15);
console.log(firstCat);
firstCat.makeSound();

// Read static property
console.log(Cat.eyeCount);