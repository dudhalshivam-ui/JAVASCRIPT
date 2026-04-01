 
//  console.log(Number.MAX_VALUE*2); //Largest possible number in JavaScript

//  console.log(Number.MIN_VALUE); //Smallest positive number (NOT negative)

//  console.log(Number.MAX_SAFE_INTEGER);// after this java script lose accuracy
//  console.log(9007199254740991 + 1);
// console.log(9007199254740991 + 2);// both may give same result ❌

// console.log(Number.MIN_SAFE_INTEGER); //Smallest safe integer

// console.log(Number.NaN);
// console.log("abc"/2);


// // Number.EPSILON ⭐ (Important): Smallest difference between two numbers

// console.log(Number.EPSILON);
// console.log(0.1 + 0.2 === 0.3); // false

// // fix
// console.log(Math.abs((0.1+0.2)-0.3)<Number.EPSILON)// true


const score = 300 

// console.log(score)

const balance = new Number (100)
// console.log(balance)

// console.log(balance.toString())//convert into string
// console.log(balance.toString().length)//convert into string

// console.log(balance.toFixed(2))// gives prrecion values 100.00

const otherNumber = 147.9938
// console.log(otherNumber.toPrecision(4)) // gives string aan precion start from left  

const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'))


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4))// convert -ve values into positive
// console.log(Math.round(5.7))// rounds of the value
// console.log(Math.ceil(3.3))// gives upper value 
// console.log(Math.floor(3.9)) // gives lower value
// console.log(Math.floor(Math.random()*10))//output : 0-9
// console.log(Math.floor(Math.random()*10)+1)// output : 1-10
// console.log(Math.min(6,38,2,47,10))
// console.log(Math.max(6,38,2,47,10))

console.log(Math.floor(Math.random()*(15-5+1)+5))
