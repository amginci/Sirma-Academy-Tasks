function calculator (num1, num2, action) {
    switch (action) {
        case 'add':
            console.log(num1+num2);
            break;
        case 'subtract':
            console.log(num1 - num2);
            break;
        case 'divide':
            console.log(num1 / num2);
            break;
        case 'multiply':
            console.log((num1*num2).toFixed(2));
            break;
        default: console.log('Choose numbers and action.');
    }
}

calculator(5, 5, 'add');
calculator(10, 12, 'subtract');
calculator(9, 3, 'divide');
calculator(5, 2, 'divide');
calculator(3.1, 0.1, 'multiply');