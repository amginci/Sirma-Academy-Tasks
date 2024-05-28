// Basic declaration
// Used to create sets of unique values
let uniqueNames = new Set(['Pesho', 'Gosho', 'Pesho']);

console.log(uniqueNames);

// Declare empty set
let uniqueNames2 = new Set();

// Add more names
uniqueNames.add('Mariyka');
console.log(uniqueNames);
uniqueNames.add('Pesho');
console.log(uniqueNames);

// Iterate through set
for (const name of uniqueNames) {
    console.log(name);
}

// Check if includes item
console.log(uniqueNames.has('Pesho')); 

// Extract all values as an array
console.log(Array.from(uniqueNames));

