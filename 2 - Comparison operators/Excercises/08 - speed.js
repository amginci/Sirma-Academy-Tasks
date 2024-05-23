function speedType(speed) {
  if (speed <= 10) {
    console.log("You are driving too slow!");
  } else if (speed > 10 && speed <= 60) {
    console.log("Your speed is average.");
  } else if (speed > 60 && speed <= 120) {
    console.log("You are driving fast.");
  } else if (speed > 120 && speed <= 160) {
    console.log("You are driving super-fast!");
  } else if (speed > 160) {
    console.log("Yor speed is turbo-fast!");
  }
}

speedType(10);
speedType(59);
speedType(120);
speedType(121);
speedType(183);
speedType(59.99);
speedType(60.001);
