function solve(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName, 
        age,
    }
    return person;
}
console.log(solve('Ivan', 'Ivanov', 29));