// Primitive  datatype

// 7 types : String, Number, Boolean, null, Undefined,  Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const BigNumber = 852963741852963741852963n
// console.log(typeof BigNumber);

//Reference (Non primitive)

// Array, Object, Functions


//This is a Array:-
const heros = ['Rohit Kumar', 'Amit Kumar','Sultan', 'Deepak Kumar'];

//This is Object:-
let myObj = {
    name:'Deepak Kumar',
    Address:'Noida',
    age:22
}

//this is function 
 const myFunctions =  function(){
    console.log("Hello World!");
 }

// note kisi bhi value, kisi bhoi chij ka data type kaise pata kare

console.log(typeof heros);

//=======================================================================

// stack memory(Primitive):-
let myYoutubename = "Deepak Kumar" 

let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

// Heap (Non - Primitive):-

let userOne = {
    useremail: "use@gmail.com",
    upi:"user@upi"
}

let userTwo = userOne
userTwo.email = "abq@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

