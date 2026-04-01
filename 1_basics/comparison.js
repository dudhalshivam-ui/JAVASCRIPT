// console.log(2>1)
// console.log(2<+1)
// console.log(2==1)
// console.log(2!=1)
// console.log(2<1)

// console.log("2">1)
// console.log("2"<01)

console.log(null > 0)
console.log(null < 0)
console.log(null == 0)
console.log(null >= 0)

// The reason is that an equality check == and comparisons > <>=
// <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.


// strict check : it compares datatype also

console.log("3"===3)// datatype is different