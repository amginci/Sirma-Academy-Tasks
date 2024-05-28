function sumOfLetters(text = '') {
    let sum = 0;

    for (i = 0; i < text.length; i++) {
        
        
            switch (text[i]) { //checking each letter from the string
            case 'a':
                sum += 1; // add letter value to sum (sum = sum + 1)
                break;
            case 'e':
                sum += 2;
                break;
            case 'i':
                sum += 3;
                break;
            case 'o':
                sum += 4;
                break;
            case 'u':
                sum += 5;
                break;
            // default: console.log('Pick a word');
            //     break;
        }
    }
    console.log(sum);   
}

sumOfLetters('hello');
sumOfLetters('hi');
sumOfLetters('bye');
sumOfLetters('zzzz');