/* Create a user object with array of address objects print all the 
city names of the addresess */

var user = {
  Name: "Ravi Soni",
  addressess: [
    { City: "Bahraich", State: "Uttar Pradesh", Zipcode: "271801" },
    { City: "Chhapra", State: "Bihar", Zipcode: "738282" },
    { City: "Ikauna", State: "Uttar Pradesh", Zipcode: "271845" },
    { City: "Guwahati", State: "Assam", Zipcode: "848392" },
  ],
  printAddress: function () {
    var add = this.addressess;
    for (var i = 0; i < add.length; i++) {
      var addr = add[i];
      console.log(addr.City);
    }
  },
};
user.printAddress();

//Given an array find the unique item:

var names = ["Ravi", "Abhay", "Suraj", "Ravi", "Anadi"];
var names_obj = {};

for (var i = 0; i < names.length; i++) {
  var name = names[i];
  names_obj[name] = true;
}
console.log(Object.keys(names_obj));

// Create a user object with some keys print all the keys  along with the value

var user = {
  Name: "Abhay",
  Age: "19",
  City: "Ikauna",
  Gender: "Male",
  Hobbies: ["Cricket", "Singing", "Travelling"],
};
for (key in user) {
  console.log("Key-" + " " + key + " " + "Value-" + " " + user[key]);
}

//Create a square object with a method to calculate the area of the sqaure.

var square = {
  side: 4,
  area: function () {
    return this.side ** 2;
  },
};
console.log(square.area());

/*Create a user object with a marks key having an array of subject marks,
with a method to add a new subject marks and also a method to calculate thr highest marks.
*/

var student = {
    name: "Ravi",
    marks:[
        {subject: "Maths", marks: 30},
        {subject: "English", marks: 40},
        {subject: "Science", marks: 25}
    ],
    addMarks: function(sub_name, sub_marks){
        var mrks = {subject: sub_name, marks: sub_marks};
        this.marks.push(mrks);
    },
    highestMarks: function(){
        var high = this.marks[0];
        for(var i = 0; i < this.marks.length; i++){
            if(this.marks[i].marks > high.marks){
                high = this.marks[i]
            }
        }
        return high
    }
}
student.addMarks("Hindi", 100);
console.log(student.highestMarks());