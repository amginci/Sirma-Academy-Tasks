function armstrongCheck(n) {
  // check how many digits there are in the number given. First convert n to string to use .length
  let nToStr = n.toString();
  let numbersCount = nToStr.length;

  let sum = 0;

  for (let i = 0; i < numbersCount; i++) {
    // raise each digit to the number of digits in n: The exponentiation ( ** ) operator returns the result of raising the first operand to the power of the second operand. Math.pow() does the same
    // sum the results

    sum += Math.pow(parseInt(nToStr[i]), numbersCount);
  }
  // check if sum is equal to the number
  if (sum === n) {
    console.log(true);
  } else {
    console.log(false);
  }
}

armstrongCheck(153);
armstrongCheck(370);
armstrongCheck(123);
armstrongCheck(407);
armstrongCheck(1634);
