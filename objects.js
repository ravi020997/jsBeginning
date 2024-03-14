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


//Using Function in Object:

var grocery = {
    rice:2,
    dal:5,
    oil:3,
    total:function(){
        var sum = this.rice + this.dal + this.oil;
        console.log(sum);
        
    }
}
grocery.total();

// Using For(in) in Object:

var Department = {
    Name: "CSE",
    Total_Members:  15,
    Ass_Professor:  6,
    Guest_teacher:  7,
    Lab_Technician: 2
}
    for(key in Department){
        console.log(Department[key])
}

