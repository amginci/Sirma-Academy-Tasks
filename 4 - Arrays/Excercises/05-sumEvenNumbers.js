function sumEvenNumbers(arr) {
    let sum = 0;  //initializes the sum of even numbers

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]); // converts arr strings to integers
        if (num % 2 === 0) { // checks if current number is even
            sum += num;  // adds even numbers to sum 
        }
    } 
    console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);