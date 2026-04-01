//  Array

const arr1 = [0,14,2,43,4,5,6]
const arr2 = new Array(1,2,3,4)
// console.log(typeof arr1) // object


// console.log(arr1[1])

//Array methods

let arr3 = new Array();
arr3.push(3) // add at the end 
arr3.push(36)
arr3.push(34)
arr3.push(7)
arr3.push(8)
arr3.push(5)

arr3.pop(); // removes from last

arr3.shift();// removes from the start

arr3.unshift(11) // add at the front or start
arr3.unshift(23)
arr3.unshift(6)
arr3.unshift(4)

// console.log(arr3.includes(8))// check value
// console.log(arr3.indexOf(7)) // returns index 


// looping through array
// for (let i=0; i<arr1.length; i++) {
//     console.log(arr3[i])

// }

// using forEach 
// arr3.forEach(function(item){
//     console.log(item)
// })


let newArray = arr3.join() // converts it to a string 
console.log(newArray) 
console.log(typeof newArray)
console.log(arr3)



// sclice , splice
let Array1 = new Array(12,5,36,322,41)

console.log("A " , Array1)

const myn1 = Array1.slice(1,3)  // gives slice values : starts from index 1 and print upto second last element i.e 2
console.log(myn1)
console.log("B " , Array1)


// splice operation : manupulates original Array after operation ; and gives value in range i.e from index 1 to 3
const myn2 = Array1.splice(1,3)
console.log(myn2)
console.log(Array1)

