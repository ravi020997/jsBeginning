/* ̉1. Given two numbers A and B print which is greater
    2. Given two passwords print "Valid Passwords" if both are the same
    3. Given a number if it is Even print "Even Number"
    4. Given the year of birth if the age is between 13 and 19 
    (Both included) print teenage
    5. Given the age of three people A B C (All Different) print the
    names in ascending order
    6. Given two numbers A and B print which is smaller 
    (Use Ternary Operator)
    7. Given the day in short format like "Mon" "Tue" ..... print them 
    as long format like "Monday" "Tuesday"...
 */

// First Question Solution:

var A = 4;
var B = 6;

if (A > B) {
  console.log("A is greater");
} else if (B > A) {
  console.log("B is greater");
} else {
  console.log("Neither A is greater nor B");
}

// Second Question Solution:

var password1 = 123;
var password2 = "123";

if (password1 == password2) {
  console.log("Valid Password");
}

// Third Question Solution:

var number = 6;

if (number % 2 == 0) {
  console.log("Even Number");
} else {
  console.log("Not Even Number");
}

//Fourth Question Solution:

var year_of_birth = 2003;
var age = 2019 - year_of_birth;

if (age > 12 && age < 20) {
  console.log("Teenage");
} else if (age >= 13 && age <= 19) {
  console.log("Teenage");
} else {
  console.log("Not Teenage");
}

// Fifth Question Solution:

var a = 22;
var b = 21;
var c = 23;

if (a < b && a < c) {
  if (b < c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b < c) {
  if (a < c) {
    console.log(b, a, c);
  } else {
    console.log(b, c, a);
  }
} else {
  if (a < b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}

// Sixth Question Solution:

var x = 7;
var y = 9;

x < y ? console.log("X is smaller") : console.log("Y is smaller");

// Seventh Question Solution :

var Day = "Sun";

switch (Day) {
  case "Sun":
    console.log(Day + "day");
    break;
  case "Mon":
    console.log(Day + "day");
    break;
  case "Tue":
    console.log(Day + "day");
    break;
  case "Wed":
    console.log(Day + "day");
    break;
  case "Thu":
    console.log(Day + "day");
    break;
  case "Fri":
    console.log(Day + "day");
    break;
  case "Sat":
    console.log(Day + "day");
    break;
  default:
    console.log("Funday");
    break;
}
