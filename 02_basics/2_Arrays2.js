/* methods which does not cahnges original array
concat()
slice()
map()
filter()
flat()
join()
*/
 
/* methods which changes original array
 push()
pop()
shift()
unshift()
splice()
sort()
reverse()
*/

/*these creates new array but shallow copy
[...arr]     // spread
slice()
Array.from()
concat()
*/


let marvel_heros = ["Thor" ,"Batman" , "Spiderman"]
const Ind_heros = ["more dhi" , " jogindhar higra" , "sunnny damcer" , "sada gurukul"]

// marvel_heros.push(Ind_heros) // modifies original array

// const all_heros = marvel_heros.concat(Ind_heros)//concat() does NOT change the original array
// It returns a new array

// console.log(all_heros)
// console.log(marvel_heros.length) // arrys taken as single element in push method



// Spread
const all_new_heros = [...marvel_heros, ...Ind_heros]

console.log(all_new_heros)
console.log(typeof all_new_heros)

const a = ["d" ,"r","t", ["x","y","z"], "lmn"]
const b = ["h","i","i","k" ,["i","p","l", ["s","h","i"]]]
// console.log(...a)// spreads array into individual values
// const c =[...a,...b]// best alternative for concate
// console.log(c)

let users = ["shiv","shambhu","raje"]
let updatedUsers = [...users,"shivam"]
console.log(updatedUsers)

// Copy array
let ary1 = [10,20,30]
let ary2 = [...ary1] // shallow copy : copies only outer array
ary2.push(40)
console.log(ary1) // not change
console.log(ary2)

// in case of nested array :shallow copy fails , shallow copy of outer array is shard and deep copy of inner array is shared
let A = [[1, 2], [3, 4]];
let B = [...a];

B[0][0] = 99;

console.log(A); // changed ❌


let C = structuredClone(A);

C[0][0] = 99;

console.log(A); // not changed ✅



// flat method : ot removes nesting inside the array

let Ary3 = [1,27,3,76,34,[55,98,20,[33,44]]]
let result = Ary3.flat(2)// Ary3,flat(infity)// flats everything
console.log(result)



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Array.isArray("shivam"))

let Name = "Anushka"
let letters =Array.from(Name)
console.log(letters)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))