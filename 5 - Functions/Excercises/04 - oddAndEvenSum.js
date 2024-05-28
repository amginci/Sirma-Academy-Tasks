function mathSolve(number) {
    let oddSum = 0;
    let evenSum = 0;

    while (number > 0) {
        let lastDigit = number % 10; // this is the way we take the odd number
        if (lastDigit % 2 ==0) {
              evenSum += lastDigit;
    } else {
            oddSum += lastDigit;
    }
    number = Math.trunc(number / 10);
    }

}

function stringSolve(number) {
    let oddSum = 0;
    let evenSum = 0;
    let textNumber = number.toString();

    // console.log(textNumber);

    for (let i = 0; i < textNumber.length; i++) {
        let currentDigit = Number(textNumber[i]);
        if (currentDigit % 2 === 0) {
            evenSum += currentDigit;
        } else {
            oddSum += currentDigit;
        }
    }
    console.log(`${oddSum}, Even sum = ${evenSum}`);
}

mathSolve(3495892137259234);
stringSolve(3495892137259234);