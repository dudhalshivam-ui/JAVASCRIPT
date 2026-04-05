// reduce method is used to reduce an array to a single value by applying a function to each element of the array and accumulating the result.

const  numbers = [1,2,3,4]

// const mytotal = numbers.reduce(function(accumalator , currentValue) {
//     console.log(`accumalator is ${accumalator} and current value is ${currentValue}`);
//     return accumalator + currentValue
// } , 0 )

const mytotal = numbers.reduce((acc , currval)=> acc + currval , 0)

console.log(mytotal);


const courses = [
    {course: "js" , price:1500},
    {course: "python" , price:2000},
    {course: "cpp" , price:2500},
    {course: "java" , price:3000},
    {course: "ruby" , price:3500}
]

const totalPrice = courses.reduce((acc , item) => acc + item.price , 0  )
console.log(totalPrice);