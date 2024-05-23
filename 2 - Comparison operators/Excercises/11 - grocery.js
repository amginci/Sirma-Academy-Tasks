function priceCalculator(product, city, quantity) {
  if (city == "Sofia") {
    let price;
    switch (product) {
      case "tea":
        price = 0.5;
        break;
      case "water":
        price = 0.8;
        break;
      case "juice":
        price = 1.2;
        break;
      case "sweets":
        price = 1.45;
        break;
      case "chips":
        price = 1.6;
      default:
        console.log("Choose a product to buy");
    }
    console.log((price * quantity).toFixed(2));
  }
  if (city == "Plovdiv") {
    let price;
    switch (product) {
      case "tea":
        price = 0.4;
        break;
      case "water":
        price = 0.7;
        break;
      case "juice":
        price = 1.15;
        break;
      case "sweets":
        price = 1.3; // Error in answer outputs
        break;
      case "chips":
        price = 1.5;
        break;
      default:
        console.log("Choose a product to buy");
    }
    console.log((price * quantity).toFixed(2));
  }
  if (city == "Varna") {
    let price;
    switch (product) {
      case "tea":
        price = 0.45;
        break;
      case "water":
        price = 0.7;
        break;
      case "juice":
        price = 1.1;
        break;
      case "sweets":
        price = 1.35;
        break;
      case "chips":
        price = 1.55;
        break;
      default:
        console.log("Choose a product to buy");
    }
    console.log((price * quantity).toFixed(2));
  }
}

priceCalculator("tea", "Varna", 2);
priceCalculator("chips", "Plovdiv", 1);
priceCalculator("juice", "Sofia", 6);
priceCalculator("sweets", "Plovdiv", 1);
