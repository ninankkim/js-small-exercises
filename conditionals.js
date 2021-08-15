// if, else if, and else keyworks are used and the comparison logic is wrapped around parathesis:

if (age < 18) {
    console.log("You are not an adult and don't have access");
} else if (age < 21) {
    console.log("You are an adult, but you have limited access");
} else {
    console.log("You have full access, do what you will");
}

// or you can use switch statements, which are less popular but has its own benefits

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    console.log("Can't figure out day");
}

console.log(`Today is ${day}`);