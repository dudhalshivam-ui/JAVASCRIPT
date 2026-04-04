const { use } = require("react");

const user = {
    username :"shivam",
    age :21,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this)
    }
}

// this = “who owns this function?” 

// user.welcomeMessage()
// user.username="maruti"
// user.welcomeMessage()

console.log(this) // {}

// let vadapav = function(){
//     let user1 = "shivam"
//     console.log(this.user1)  
// }
// vadapav();



// arrow functon is the short way to write function and it does not have its own this keyword, it takes this from the surrounding code where it is defined.

let vadapav = () =>{
    let user1 = "shivam"
    console.log(this)  
}

vadapav();


const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

const sub = (a, b) => {
    return a - b;
}

const multiply = (a, b) =>(a * b);
console.log(multiply(5, 3)); // Output: 15`

const retobj =() => ({name:"shivam",age:21})
console.log(retobj()) // { name: 'shivam', age: 21 }