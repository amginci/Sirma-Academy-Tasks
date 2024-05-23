function priceCalculator(product, day, quantity) {
  let weekday = day == 'Monday'
            || day == 'Tuesday'
            || day == 'Wednesday'
            || day == 'Thursday'
            || day == 'Friday'; 

  let price;
  // let product = '';
  
  // using ternary operator

//   function (product) {
//     let price;
//     if (product = 'tomato') {
//       return weekday ? price = 2.5 : price = 2.8;
//     } 
//   } else if (product = 'onion') {
//     return weekday ? price = 1.2 : price = 1.3;
//   } else if (product = 'lettuce') {
//     return weekday ? price = 0.85 : price = 0.85;
//   } else if (product = 'cucumber') {
//     return weekday ? price = 1.45 : price = 1.75;
//   } else if (product = 'pepper') {
//     return weekday ? price = 5.50 : price = 3.50;
//   }
// }
  // const totalPrice = price * quantity;
  // console.log(totalPrice);

  // using switch + if else
  switch (product) {
    case 'tomato':
      if (weekday) {
        price = 2.50;
      }
      else { 
        price = 2.80; 
      }
      break;
    case 'onion':
      if (weekday) {
        price = 1.20;
      } else {
        price = 1.30;
      }
      break;
    case 'lettuce':
      if (weekday) {
        price = 0.85;
      } else {
        price = 0.85;
      }
      break;
    case 'cucumber':
      if (weekday) {
        price = 1.45;
      } else {
        price = 1.75;
      }
      break;
    case 'pepper':
      if (weekday) {
        price = 5.50;
      } else {
        price = 3.50;
      }
      break;
      default: console.log('Error');
      break;
    }

    const totalPrice = price * quantity;

    console.log(`Total price is ${totalPrice.toFixed(2)} leva`);
  }

priceCalculator("tomato", "Tuesday", 2);
priceCalculator("onion", "Sunday", 3);
priceCalculator("pepper", "Monday", 10);
priceCalculator("banana", "Friday", 5);