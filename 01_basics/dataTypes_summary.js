//JS is Dynamically type language hai

// 1️⃣ Primitive => call by value/copy of data

// 7 types : String, Number, Boolean, Null, Undefined, BigInt, Symbol

const isLoggedIn = true;
let outsideTemp = null;
let userEmail;

// use of Symbol data type
const id = Symbol("123");
const anotherId = Symbol("123");
//in symbol if we pass same value he returns unique values
//console.log(id === anotherId);

// 2️⃣ Non-Primitive => reference type
// Array, Objects, Functions

let Heros = ["shaktiman", "naagraj", "doga"];
//console.log(typeof Heros, Heros);

let user = {
  userName: "vhiswajit",
  age: 22,
};
//console.log(typeof user, user);

let myFunction = function () {
  console.log("hey");
};
//console.log(typeof myFunction);
//myFunction();

//+++++++++++++++++++++++++++++++++++++++++++++    Memory  +++++++++++++++++++++++++++++++++++++++++++++++

//Stack => use in Primitive
//Heap => use in Non-Primitive

let myYoutubeName = "vishwajit";
let anotherName = myYoutubeName;

anotherName = "JavaScript.info";

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "vishwajit@google.com";
console.log(userOne.email);
console.log(userTwo.email);
