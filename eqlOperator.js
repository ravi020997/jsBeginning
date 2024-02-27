//Stating the difference b/w double and triple equal operator:

var num1 = 3;
var num2 = "3";
//So here it is printing true because value is same, it doesn't care about the datatypes:
console.log(num1 == num2);

//Now triple eqaul operator is stating the big difference while considering it as a datatype:
console.log(num1 === num2);

// We have not equal to opeartor also which work as same sa it, here output wil be false:
console.log(num1 != num2);

// Considering the !== now:
console.log(num1 !== num2);

