function printSmallestWithConsitionals (num1, num2, num3) {
    if (num1 < num2) {
        if (num1 < num3) {
            console.log(num1);
        }
    }
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    } else if (num2 < num1 && num2 < num3) {
        console.log(num2);
    }
}

function findSmaller (first, second) {
    // using ternary operator
    return first < second ? first : second;
}
function findSmallest (first, second, third) {
    let smaller = findSmaller(first, second);
    let result = findSmaller(smaller, third);
    
    console.log(result);
}
findSmallest(4,5,9);

