function printReference(age, gender) {
  if (gender == "m") {
    if (age >= 16) {
      console.log("Mr.");
    } else {
      console.log("Master");
    }
  } else {
    if (age >= 16) {
      console.log("Mrs.");
    } else {
      console.log("Miss");
    }
  }
}
printReference(14, "f");
printReference(17, "m");
printReference(10, "m");
printReference(32, "f");
