//const coding = ["js", "python", "ruby", "java", "c++"];

// coding.forEach((item) =>{
//     console.log(item);

// })


// const values = coding.forEach((item) =>{
//     console.log(item);
//     return item;

// })
// console.log(values); // undefined


const myNums = [1,2,11,23,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => num > 4 )
const newNums = myNums.filter((num) => {
    return num>4
} )
console.log(newNums); // [5,6,7,8,9,10]



const newNums2 = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums2.push(num);
    }
});
console.log(newNums2); // [5,6,7,8,9,10]



const books = [
    {
        title: "Book 1",
        genre: "Fiction",
        published: 2020
    },
    {
        title: "Book 2",
        genre: "Non-Fiction",
        published: 2019
    },
    {
        title: "Book 3",
        genre: "Fiction",
        published: 2021

    },
    {
        title: "Book 4",
        genre: "Non-Fiction",
        published: 2018
    },
    {
        title: "Book 5",
        genre: "Fiction",
        published: 2020
    },{
        title: "Book 6",
        genre: "Non-Fiction",
        published: 2022
    }
];


// we want books with genre fiction and published after 2020
const userbooks = books.filter( (bk)=> {
    if(bk.genre==="Fiction" && bk.published>=2020){
        return bk;
    }
}
)
console.log(userbooks);


// books which are published in even year 
const userbooks2 = books.filter((bk)=> bk.published%2===0)
console.log(userbooks2);



// maps 
const numbers = [1,2,3,4,5,6,7,8,9,10]

const newNums3 = numbers.map((num)=> {return num+10})
console.log(newNums3); // [11,12,13,14,15,16,17,18,19,20]


// CHAINNING 

const newNums4 = numbers
                 .map((num)=>num*10)
                 .map((num)=> { return (num*2)+1 })
                 .filter((num)=> num>100)
console.log(newNums4); 



