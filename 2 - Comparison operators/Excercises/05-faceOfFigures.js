// Option 1

function calculation(type, dimensionA, dimensionB) {
  let area;

  if (type == "square") {
    area = dimensionA * dimensionA;
  } else if (type == "rectangle") {
    area = dimensionA * dimensionB;
  } else if (type == "triangle") {
    area = (dimensionA * dimensionB) / 2;
  } else if (type == "circle") {
    area = Math.PI * (dimensionA * dimensionA);
  }
  console.log(area.toFixed(2));
}
calculation("square", 5);
calculation("rectangle", 10, 3.5);
calculation("triangle", 4.5, 20);
calculation("circle", 10);

// Option 2

function calculateArea(type, a, b) {
  let area;
  switch (type) {
    case "square":
      area = a * a;
      console.log(area.toFixed(2));
      break;
    case "rectangle":
      area = a * b;
      console.log(area.toFixed(2));
      break;
    case "triangle":
      area = (a * b) / 2;
      console.log(area.toFixed(2));
      break;
    case "circle":
      area = Math.PI * (a * a);
      console.log(area.toFixed(2));
      break;
    default:
      console.log("Enter paramaters");
  }
}

calculateArea("square", 5);
calculateArea("rectangle", 10, 3.5);
calculateArea("triangle", 4.5, 20);
calculateArea("circle", 10);
