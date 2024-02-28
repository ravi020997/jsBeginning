// Starting from the if statement:

var age = 29;
if (age > 25) {
  console.log(" Age is greater than 25 or eqaul ");
}

// Now comes to the if-else statement:

var marks = 78;
if (marks < 60) {
  console.log("Student is Failed");
} else {
  console.log("Student is Passed");
}

// Here is the last but not least else-if statement:

var total_marks = 50;
var obtained_marks = 35;

if (obtained_marks === total_marks) {
  console.log("Passed with 100% marks");
} else if (obtained_marks < total_marks) {
  console.log("Not Passed with 100% marks");
} else {
  console.log("Not Found Your result");
}

//Without writing if and else statement, we will write code as conditional statement , to compare the statement:

var a = 5;
var b = 6;
a > b
  ? console.log("A is Greater than B")
  : console.log("A is not Greater than B");
