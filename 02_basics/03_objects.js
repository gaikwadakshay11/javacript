//Singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"akshay",
    "full name": "Akshay Gaikwad",
    [mySym]:"mykey1",
    age:18,
    location:"Latur",
    email:"akshay@gmail.com",
    isLoggedIn: false,
    lastLogginDays:["Monday","saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "Akshay@chatgpt.com"
// Object.freeze(JsUser)
// console.log(JsUser);

JsUser.greeting = function(){
console.log("hello js user");

}
console.log(JsUser.greeting);
