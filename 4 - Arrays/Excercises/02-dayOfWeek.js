function weekDay(number) {
    // Populate a const with array holding the days
    const weekDays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    // Check if index of the given number is between 0 and 6 (which is the index of the weekdays)
    if (weekDays[number - 1]) {
    // Print the name of the day
      console.log(weekDays[number - 1]);
    } else {
    // If number isn't in the scope print an Error
      console.log('Invalid day!');
    }
  }
  weekDay(3);
  weekDay(6);
  weekDay(11);