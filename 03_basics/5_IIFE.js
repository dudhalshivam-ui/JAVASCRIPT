// An Immediately Invoked Function Expression (IIFE) is a function that runs immediately after it is created.

// Immediately → runs instantly
// Invoked → called/executed
// Function Expression → function used as a value (not a declaration)

// IIFE syntax

// (function() {
//   // code here
// })();        

// (() => {
//   // code
// })();


/*
Advantages of IIFE:

1. Avoids Global Scope Pollution: Variables and functions defined inside an IIFE are not accessible from the outside, preventing conflicts with other code. 
2. Encapsulation: IIFEs create a private scope for variables and functions, allowing you to encapsulate code and avoid unintended interactions with other parts of the program.
3. Module Pattern: IIFEs can be used to create modules, allowing you to organize code into reusable and maintainable units.
4. Immediate Execution: IIFEs run immediately after they are defined, which can be useful for initializing code or performing setup tasks without needing to call a function separately.
5. Run code only once: IIFEs are executed immediately, so they are ideal for code that needs to run only once, such as initialization code or setup tasks.

*/

(function IIFE1(){
    console.log("this is an IIFE function")
})(); // this is an IIFE function


(display = (name) =>{
    console.log(`welcome ${name} to the website `)
})("shivam");