// nested loop should use different letters
for (let i = 0; i < 10; i++) {
    console.log('i = ' + i);
    for (let j = 0; j < 10; j++) {
        console.log('j = ' + j);
    }
}
// 10 first
// 100 second (10 x 10 for each interation of the first loop)