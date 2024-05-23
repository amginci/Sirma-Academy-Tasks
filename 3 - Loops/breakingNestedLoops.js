// Breaking inner loop
for (let i = 0; i < 10; i++) {
    if (i > 5) {
        break;
    }
    for (let j = 0; j < 10; j++) {
        
        if (j > 5) {
            break;
        }
        console.log(`${i} - ${j}`);
    }
   
}