// Breaking an Infinite Loop

while (true) {
    console.log('Infinite loop');
    if (Math.random() < 0.05) {
        break;
    }
}

console.log('End program');