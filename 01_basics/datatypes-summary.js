// primative data type 7 = String, Boolearn, null, Number, undefined, symbol, BigInt

const score =100
const scoreValue= 100.3
const osLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// const bigNumber = 342342343442343

// Reference (Non primitive)

// Array, Objects, Functions

const heros=["shaktiman", "naagraj", "doga"]
let myObj = {
     name:"akshay",
     age:22,

}
const myfunction = function() {
    console.log("Hello world");
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);


//stack (primitive), Heap (non-Primitive)
let myYoutubename = "akshaydotcom"
let anothername = myYoutubename
anothername ="code"
console.log(anothername);
console.log(anothername);

let userOne ={
     email:"user@google.com",
     upi:"user@ybi"
}
let usertwo = userOne
usertwo.email ="akshay@google.com"
