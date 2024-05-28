// Access control for certain properties

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // this.fullName = firstName + lastName;
    }

    // GETTER

    // Using getter property (for values that depend on other values)
     get fullName() {
        return `${this.firstName} ${this.lastName}`;
     }


     // SETTER

     // Using setter property (can redefine values of properties)
     set fullName(value) {
        // value.split(' ');
        // const firstName = namesArr[0]; // using array destructuring
        // const lastName = namesArr[1];

        // instead use array destructuring assignment:

        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName; // feed the properties back to object
        this.lastName = lastName; // feed the properties back to object
     }
}
const person = new Person('Pesho', 'Petrov');
console.log(person);

// Using the value of getter
console.log(person.fullName);

person.firstName = 'Peter';
console.log(person);
console.log(person.fullName);


// Using setter
person.fullName = 'Ivan Ivanov'; // cannot redefine getter so we use setter
console.log(person);
console.log(person.fullName);