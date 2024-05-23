function holiday(budget, season) {
  let vacationPlacesToStayAt;
  let destination = "";
  let budgetSpent;

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      budgetSpent = budget * 0.3;
      vacationPlacesToStayAt = "Camp";
    } else if (season === "winter") {
      budgetSpent = budget * 0.7;
      vacationPlacesToStayAt = "Hotel";
    }
  } else if (budget <= 1000) {
    destination = "Europe";
    if (season === "summer") {
      budgetSpent = budget * 0.4;
      vacationPlacesToStayAt = "Camp";
    } else if (season === "winter") {
      budgetSpent = budget * 0.8;
      vacationPlacesToStayAt = "Hotel";
    }
  } else if (budget > 1000) {
    destination = "Asia";
    budgetSpent = budget * 0.9;
    vacationPlacesToStayAt = "Hotel";
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${vacationPlacesToStayAt} - ${budgetSpent.toFixed(2)}`);
}
holiday(50, "summer");
holiday(75, "winter");
holiday(312, "summer"); 
holiday(678.53, "winter"); // mistake in answers
holiday(1500, "summer");
