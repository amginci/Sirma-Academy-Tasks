function fibonacciSeqSum(n) {
  // Check if n is less or equal to 0
  if (n <= 0) {
    console.log(0);
    return 0;
  }

  // Set variables for the first two Fibonacci numbers
  let a = 1;
  let b = 1;
  let sum = a;

  if (n === 1) {
    console.log(a);
    return a;
  } else if (n === 2) {
    sum += b;
    console.log(sum);
    return sum;
  }

  sum += b;

  for (let i = 3; i <= n; i++) {
    let next = a + b;
    sum += next;
    a = b;
    b = next;
  }
  console.log(sum);
  return sum;
}

fibonacciSeqSum(3);
fibonacciSeqSum(5);
fibonacciSeqSum(1);
fibonacciSeqSum(0);
fibonacciSeqSum(10);
