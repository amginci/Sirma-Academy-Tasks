// Breaking an infinite Loop

while (true) {
    console.log('Infinite loop');
    if (Math.random() < 0.05) {
        break; // stopping the loop
    }
}

console.log('End program');