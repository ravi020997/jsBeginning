// Here we're going to take a short description of JS Objects and its uses:

var person = {
    Name: "Ravi Soni",
    Gender: "Male",
    YOB: 2001,
    Hobbies: ["Coding", "Singing", "Travelling"],
    Address: {
        City: "Ikauna",
        District: "Shravasti",
        State: "Uttar Pradesh",
        Zipcode: 271845
    },
        firstHobby:function(){
            console.log("My first hobby" + " " +this.Hobbies[0]);
        }
    
    }
    person.firstHobby();

console.log(person.YOB)

// We can delete the key using Delete:

delete person.Gender;
console.log(person);


// methods in object:

