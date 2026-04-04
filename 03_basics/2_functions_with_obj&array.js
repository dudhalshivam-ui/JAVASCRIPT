const user = {
  name: "Shivam",
  age: 22
};

function greet(person) {
  console.log("Hello " + person.name);
}

greet(user);




// modify object inside the function

function updateAge(obj) {
  obj.age = 25;
}

const user1 = { name: "Shivam", age: 22 };

updateAge(user1);

console.log(user1.age);



//🔹 Returning object from function

function createUser(name, age) {
  return {
    name: name,
    age: age
  };
}

const newUser = createUser("Ram", 20);
console.log(newUser);




//🔹 Modify array inside function

function addElement(arr) {
  arr.push(100);
}

const numbers = [1, 2, 3];

addElement(numbers);

console.log(numbers);




// ⚡ Key Points (remember this)
// Objects → use . to access (e.g., obj.name)
// Arrays → use index (e.g., arr[0])
// Both arrays & objects → pass by reference
// So functions can change original data




function increaseage(users){
    return users.age++;
}

user3 = {
    name :"harsh",
    age :20,
}

increaseage(user3)
console.log(user3)