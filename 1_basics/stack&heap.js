//Stack(primitive) , Heap(non-primitive)

//primitive : we get copy of variables

let myName = "shivam";

let anotherName = myName;
anotherName = "bala";

console.log(anotherName);
console.log(myName);

// Reference : we get reference of objects , arrays etc
let user1 = {
  email: "shivam@gail.com",
  upi: "user1@ybl",
};

let user2 = user1

user2.email="maruti.email"

console.log(user1)
console.log(user2)
