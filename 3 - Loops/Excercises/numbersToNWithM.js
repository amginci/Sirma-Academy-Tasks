function solve(number, step) {
    let sum = 0;
    for (let i = 1; i < number; i++){
        sum = i += step;
    }

}

solve(10, 2)