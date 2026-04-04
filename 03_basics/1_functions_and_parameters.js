function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
let result = addTwoNumbers(5, 10);
console.log(result);

function loginUserMessage(userName = "bhaiya") {
  if (!userName) {
    // we also can use !userName to check for falsy values like null, undefined, empty string etc
    return "Please enter a username";
  }
  return `${userName} just logged in`;
}
let message = loginUserMessage();
console.log(message);



// rest parameters (...args) use to pass variable number of arguments to a function
function sum(...numbers) {
  let numbersgiven = new Array(...numbers);
  console.log(numbersgiven);
  let total = 0;
  for (let num of numbersgiven) {
    total = total + num;
  }

  return total;
}

let sum1 = sum(2,3,4,24,24,42,3,4)
console.log(sum1)


// caling function inside another function
function greet (name , callback){
    console.log(`hello ${name}`);
    callback();
}
function saybye(){
    console.log("good bye")
}

greet("shivam",saybye)




// arrow function : it is a shorter syntax for writing functions and does not have its own this keyword
const add = (a,b)=>a+b;

console.log(add(5,10))