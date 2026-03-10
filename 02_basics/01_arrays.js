const myArr = [0,1,2,3,4,5,6,]
const MyHeros = ["shaktiman","chotabheem"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);
//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.unshift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr= myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// console.log("A",myArr);
// const myn1 = myArr.slice(1,3)

// console.log("B", myArr);
// console.log(myn1);

// const myn2 = myArr.splice(1,3)
// console.log("c",myArr);
// console.log(myn2);

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superaman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][1]);

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);
// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
 

const another_array =[1,2,3,[4,5,6],7,[4,5,[6,7]]]
const real_another_array= another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray("Akshay"))
console.log(Array.from("akshay"))
console.log(Array.from({name:"akshay"}))  // interesting

let scroe1 = 100
let scroe2 = 200
let scroe3 = 300
 
console.log(Array.of (scroe1,scroe2,scroe3));