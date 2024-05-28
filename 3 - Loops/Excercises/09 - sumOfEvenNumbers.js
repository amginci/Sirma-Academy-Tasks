function sumEvenNumbers(n) {
  let sum = 0;
  let nToStr = n.toString;
  let nLength = nToStr.length;

  for (i = 0; i < nLength; i++) {
    if (parseInt(nToStr[i]) % 2 == 0) {
      sum += parseInt(nToStr[i]);
    }
  }
  console.log(sumEvenNumbers);
}

sumEvenNumbers(3);
sumEvenNumbers(5);
sumEvenNumbers(1);
sumEvenNumbers(0);
sumEvenNumbers(10);

