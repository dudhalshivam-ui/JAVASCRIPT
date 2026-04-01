// string is sequence of characters (text)

// three ways to create string : double quotes , single quotes , backticks (template literals)

let str = `Hello`;   //(backtics)

let name = "Shivam";
let msg = `Hello ${name}`;
// console.log(msg);

// string properties

let str1 = new String("shivam")

console.log(str1.length);
console.log(str1[0]); // s
console.log(str[14]); // a
console.log(str1.toUpperCase()); // SHIAVM
console.log(str1.toLowerCase()); // shivam

console.log(str1.slice(-0,4))// shiv
console.log(str1.substring(0,4))// shiv : : no negative values

console.log(str1.replace("shivam","shambhu")) //shambhu

let str3 = "a-b-c"
console.log(str3.replaceAll("-" , "+"))

console.log(str1.indexOf("i"))//

console.log(str1.includes("a"))// true
console.log(str1.startsWith("s"))// true
console.log(str1.endsWith("m"))// true

let str4 = "shivam,Bharat,Dudhal" // TRY USING REGEX ALSO
console.log(str4.split(","))

let str5 = "ShivamBharatDudhal"
console.log(str5.split(/(?=[A-Z])/))

console.log("he\t said\n \"hello\"")

// joint : an array method - it converts array into string 

arr = ["a","b","c"]
let result = arr.join("+")
console.log(result)
