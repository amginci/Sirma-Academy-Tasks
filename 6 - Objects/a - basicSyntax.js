// declare object

let student = {
    firstName: 'Pesho',
    age: 21, // trailing zapetaikata nakraq ne e zadyljitelna. Nqma znachenie dali q ima ili nqma
};

console.log(student);

// declare empty object

let person = {};

// dynamically assign properties

person.name = 'Gosho';
person.age = 25;

console.log(person);

// change property value

person.age = 26;
console.log(person);

// read property value
console.log(person);


// assign variable value to property

let firstName = 'Gosho'
let person2 = {
    firstName: firstName
}

// using shorthand syntax
person3 = {
    firstName,
    age: 30,
}
console.log(person3);