// methodes to create objects

// 1. Object literal
let user = {
    name: "John",
    age: 30
};      

// 2. using new object
let user2 = new Object();
user2.name = "Alice";
user2.age = 25;

// 3. using constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
}
let student1 = new Student("shivam",22);
let student2 = new Student("bala",24);


// 4. using class
class employee{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let p1 = new employee("rupesh",35);



//5.object.create() method : it creates a new object with the specified prototype object and properties.
let faculty = {
    greet(){
        console.log("Hello from faculty")
    }
}
let teacher = Object.create(faculty);
teacher.name="rutuja"
teacher.age=25
teacher.greet() // it can access the method of faculty object
console.log(teacher)



let id = Symbol("key1")

// object literals 
const jsUser = {
    name : "anushka",
    age : 20,
    [id] : "123abc",
    location : "katar khatav",
    email : "anushka@gmail.com",
    isOnline : true,
    skills : ["html","css","js"],
    greet : function(){
        console.log("Hello shivam")
    }
}

console.log(jsUser.name)
console.log(jsUser.skills)
console.log(typeof jsUser[id]) // string
console.log(typeof id)

jsUser.email="shingade@gmail.com"   // modify existing property
jsUser.phone = "1234567890" // add new property
delete jsUser.location // delete property

// frees froperty
Object.freeze(jsUser)
jsUser.name = "shivam" // it will not change the name property  
console.log(jsUser.name)

console.log(jsUser)


console.log("------------------ object de-structuring ------------------")

//without object de-structuring
/*
const user = {
  name: "Shivam",
  age: 22,
  city: "Pune"
};

console.log(user.name);
console.log(user.age);
*/



// with object de-structuring

const user1 = {
    name:"shivam",
    age:21,
    city:"pune"
};

const{name,age}= user1; // object de-structuring : it allows us to extract properties from an object and assign them to variables with the same name as the properties.

console.log(name)
console.log(age)

const{name: newName, age: newAge} = user1; // object de-structuring with renaming
console.log(newName);
console.log(newAge);


const team = {
    teamName : "India",
    teamcode : "IND45",
};
const {agegroup="u-19"} = team; // adding default value
console.log(agegroup)

function display({teamName:name , teamcode:code}){
    console.log(name,code)
}
display(team)


const user3 = {
  Name: "Shivam",
  age: 22,
  city: "Pune"
};

const { Name, ...rest } = user3;

console.log(Name); // Shivam
console.log(rest); // { age: 22, city: "Pune" }
