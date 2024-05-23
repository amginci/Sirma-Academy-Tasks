function processArray(n, arr) {

    // Create the new array with the first n elements
    let newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(arr[i]);
    }
    
    // Reverse the new array
    let reversedArray = [];
    for (let i = newArray.length - 1; i >= 0; i--) {
        reversedArray.push(newArray[i]);
    }

    // Print the reversed array elements on a single line, space-separated
    console.log(reversedArray.join(' '));
}

// Example usage:
processArray(3, [10, 20, 30, 40, 50])
processArray(4, [-1, 20, 99, 5])
processArray(2, [66, 43, 75, 89, 47])
