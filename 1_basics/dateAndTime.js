// let now = new Date();
// console.log(typeof now)
// console.log(now);

// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())

// let myCreatedDate = new Date(2026,0,29)
// console.log(myCreatedDate.toDateString())


// let now = new Date();
// console.log(now) // gives current date : 2026-03-25T08:28:47.154Z



// let d = new Date("2026-03-25"); // custom date -> string
    // console.log(d)

// let D = new Date(2026,2,25,23,3)
// console.log(D.toDateString())
// console.log(D.toTimeString())
// console.log(D.toLocaleDateString())
// console.log(D.toLocaleTimeString())






// creating your own date 
let d = new Date(2024,9,27,1,30,43); //“Set date to 27 October 2024”

//Getting Values (Reading the Watch)
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());


// Setting Values (Changing the Watch)
d.setFullYear(2023)
d.setMonth(5);
d.setDate(10);
console.log(d.toString())

// let formatted = d.toLocaleDateString("en-IN",{
//     weekday : "long",
//     month: "short",
//     day:"2-digit"
// })

let formatted = d.toLocaleDateString("en-IN",{
    weekday : "short",
    month: "2-digit",
    day:"2-digit",
    year : "numeric",
    hour :"2-digit",
    minute : "numeric",
    second:"2-digit"

    
})

console.log(formatted)
console.log(formatted)
// console.log(d.toISOString())