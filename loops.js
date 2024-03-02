//While loop

var i = 0;
while (i < 15) {
  console.log("Ravi Soni");
  i++;
}

//For loop

for (var i = 50; i > 1; i--) {
  console.log(i);
}
console.log("Ends");

// Using break

for (var i = 50; i > 0; i--) {
  if (i == 25) {
    break;
  }
  console.log(i);
}

// Using Continue

for (var i = 50; i > 0; i--) {
  if (i == 25) {
    continue;
  }
  console.log(i);
}

// Array

var fruits = ["Banana", "Apple", "Pineapple"];

console.log(fruits);

// Pop function
fruits.pop();
console.log(fruits);

//Push Function
fruits.push("Grapes");
console.log(fruits);

//finding the length of fruits array:

var size = fruits.length;
console.log(size);

// finding the last element of Array:

console.log(fruits[size - 1]);

//Printing the index of each array element:

var nums = [23, 45, 56, 78, 90, 34];
for (i = 0; i < nums.length; i++) {
  console.log(i);
  console.log(nums[i]);
}

//Strings \:

var name = "Ravi Soni";
for (var i = 0; i <= name.length; i++) {
  console.log(name[i]);
  console.log(i);
}

//Nested loop:
var fruits = ["Banana", "Apple", "Pineapple"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  for (var j = 0; j < fruits[i].length; j++) {
    console.log(fruits[i][j]);
  }
}

// Another Question printing reverse value on array:

var names = "Lucknow University";

for (var i = names.length - 1 ; i >= 0; i--) {
    console.log(names[i]);
}