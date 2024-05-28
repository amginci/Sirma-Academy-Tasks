// 1. inital value (start condition)
// 2. check if value is final or not, if still true proceed to code block (end condition)
// 3. code block execution through the iterations until end condition is false (i < 12 is false) loop is then finished 
// 4. action - incremented/decremented initial value and start the loop again

// count to 12:

for (let i = 1; i <= 12; i++) {
    console.log('Number ' + i);
}

//Increment operators

console.log('________');
let a = 10;
// let b = 10;

// unary operators - take just one operator   

console.log(a); // returns a (10)
console.log(a++); // returns a and increments value by one // i += 1, i = i + 1 (post-increment) (but first returns a which is still 10)
console.log(a); // returns 11 because it is printed after it's been incremented

console.log(++a); // increments the value by one and returns a (pre-increment) (12 because it's = 11 + 1 and this is printed before the value a)
console.log(a--); // returns a and decrements value by one (post-decrement) (returns 12 because it prints a before decrementation)
console.log(a); // a = 11 after decrementation
console.log(--a); // decrements the value by one and returns a (pre-decrement). returns 10 (decremented by one value first)