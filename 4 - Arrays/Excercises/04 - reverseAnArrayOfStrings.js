function reverseArray(arr) {
    // Swapping elements
    for (let i = 0; i < arr.length / 2; i++) {
        let tempArr = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tempArr;
    }

    // Print elements space separated
    console.log(arr.join(' '));
}

reverseArray(['a', 'b', 'c', 'd', 'e']);
reverseArray(['abc', 'def', 'hig', 'kim', 'nop']);
reverseArray(['33', '123', '0', 'dd']);
