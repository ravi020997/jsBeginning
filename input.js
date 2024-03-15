//So, here as we can see inputs are taken by the user and spilitted:

function runProgram(input) {
  console.log(input.split(/[\r\n]+/));
  var input_arr = input.split(/[\r\n]+/);
  var num_arr = [];
  for (var i = 0; i < input_arr.length; i++) {
   var row = input_arr[i].split("")
   num_arr.push(row)
  }
  console.log(num_arr);
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});

process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
