// Given a number find it is divisible or Non-divisible:

function number(nums) {
  if (nums % 3 == 0) {
    console.log("Number is divisible");
  } else {
    console.log("Not Divisible");
  }
}
number(4);

// Average of given number:

function div(avg) {
  var total = 0;
  for (var i = 0; i <= avg; i++) {
    total = total + i;
    avg_total = total / avg;
  }
  console.log(avg_total);
}
div(4);

// Lower Case to Upper Case:

var lower = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function alpha(char) {
  for (var i = 0; i <= lower.length; i++) {
    if (char == lower[i]) {
      return upperCase[i];
    }
  }
}
console.log(alpha("y"));

// Reversing string into capital alphabet:

var sch = "ravi";
var out = "";
for (var i = 0; i < sch.length; i++) {
  var count = alpha(sch[i]);
  out = out + count;
}
console.log(out);

// // Given a number find number is prime or non-prime:

var a = 9;

function isPrime(input) {
  var factors = 0;
  for (var i = 1; i <= input; i++) {
    if (input % i == 0) {
      factors++;
    }
  }
  if (factors == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(a));

// Printing Prime Number 0-100:

for (var i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// Find the maximum and occurances of that maximum value;

var x = [2, 4, 6, 9, 10, 34, 34, 100, 124, 100];

var inMax = x[0];

// to find minimum just we have reverse the comparison sign

for (var i = 0; i <= x.length; i++) {
  if (x[i] > inMax) {
    inMax = x[i];
  }
}
console.log(inMax);

var count = 0;

function findOccurances(input, match) {
  for (var i = 0; i < input.length; i++) {
    if (match == input[i]) {
      count++;
    }
  }
  return count;
}
console.log(findOccurances(x, 2));

// Exclude the vowels in given string name:

var vowels = ["a", "e", "i", "o", "u"];

function strVowels(nouns) {
  for (var i = 0; i < vowels.length; i++) {
    if (nouns == vowels[i]) {
      return true;
    }
  }
  return false;
}

var strName = "Human Being";
var emp = " ";

for(var i = 0; i < strName.length; i++){
    if(! strVowels(strName[i])){
       emp = emp + strName[i];
    }
}console.log(emp);
// input= [1,2,3,-2,24]; output;28
 
var Arr = [5,10,15,-19,20]
var sum = 0;
for(var i = 0; i < Arr.length; i++){
    sum = sum + Arr[i];
}
console.log(sum);