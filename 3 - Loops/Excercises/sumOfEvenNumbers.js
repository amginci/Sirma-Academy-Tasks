function sumEvenNumbers(n) {
    let sum = 0;
    for (i = 0; i < n.length; i++) {
        if (i % 2 == 0) {
            sum += i;
            i++;
        }
    }
    console.log(sumEvenNumbers);   
}

sumEvenNumbers(3)