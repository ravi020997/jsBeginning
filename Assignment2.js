/* 
    1. Given a var Draw a pattern of 0's 
    2. Given a varibale Print 10 times that string
    3. Find the average of given limit 1 to 10
    4. Draw a pattern by taking two variables left and right with number of 3 and 5:
     example: 1.1
              1.2.....
    5.Given a array of scores find the highest scores
    6.Count the number of vowels of given string array:
*/

// 1 solution:

var num = 5;
sum = " ";
for (var i = 0; i < num; i++) {
  for (var j = 0; j < i; j++) {
    sum = sum + " " + 0;
    console.log(sum);
  }
}
// Question 2 Solution
var count = 10;
var i = 0;
while (i < count) {
  i++;
  console.log("Ravi Soni");
}

// Average of all given limit 1 To 10:
var avg = 10;
var sum = 0;
for (var i = 1; i <= avg; i++) {
  sum = sum + i;
  total_avg = sum / avg;
}
console.log(total_avg);

//Pattern Question:

var left = 3;
var right = 5;
for (var i = 1; i <= left; i++) {
  for (j = 1; j <= right; j++) {
    console.log(i + "." + j);
  }
}

//Finding Highest Scores Question :

var scores = [19, 13, 27, 38, 56, 127, 98];
var highest = scores[0];

for (var i = 1; i <= scores.length; i++) {
  if (scores[i] > highest) {
    highest = scores[i];
  }
}
console.log(highest);

var str = ["Ravi Soni", "Human Being"];
var count = 0;
for (var i = 0; i < str.length; i++) {
  for (j = 0; j < str[i].length; j++) {
    if (
      str[i][j] == "a" ||
      str[i][j] == "e" ||
      str[i][j] == "i" ||
      str[i][j] == "o" ||
      str[i][j] == "u"
    ) {
      count++;
    }
  }
}
console.log(count);
