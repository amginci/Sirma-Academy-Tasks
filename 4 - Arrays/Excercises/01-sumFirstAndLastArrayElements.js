function sumElements(element) {
    // Destructuring project to different smaller tasks:

    // 1. Get first and last elements
    let firstElement = element[0];
    let lastElement = element[element.length - 1];

    // 2. Convert elements to numbers
    let firstNumber = Number(firstElement); // +firstElement
    let lastNumber = Number(lastElement);

    // 3. Set numbers
    let result = firstNumber + lastNumber;

    // 4. Print result
    console.log(result);
}
sumElements(['20', '30', '40']);
sumElements(['10', '17', '22', '33']);
sumElements(['11', '58', '69']);