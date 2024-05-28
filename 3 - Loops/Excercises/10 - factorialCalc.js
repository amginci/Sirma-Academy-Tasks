function factorial(n) {
    // Handle the special cases for 0 and 1
    if (n === 0 || n === 1) {
      console.log(1);
    }
  
    // Initialize the factorial result
    let result = 1;
  
    // Loop from 1 to n and multiply each number to the result
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  
    console.log(result);
  }

factorial(5);
factorial(3);
factorial(0);
factorial(1);
factorial(10);