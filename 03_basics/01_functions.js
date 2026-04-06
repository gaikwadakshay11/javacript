

function sayMyName() {
    console.log("A");
    console.log("k");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("y");

}
// sayMyName()
//  function addTwoNumber(number1, number2){
//     console.log(number1 + number2);


//  }
//  addTwoNumber(3, null)

 function loginUserMessege(username){
    if(username === undefined){
        console.log("Please enter a username");
        
    }
    return '${username} just logged in '
 }
//  console.log(loginUserMessege("hitesh"));
console.log(loginUserMessege());

 const myNewArray = [200, 400, 100, 600]
  function returnSecondValue(getArray){
    return getArray[1]

  }
  console.log(returnSecondValue([200, 400, 500, 1000]));
  