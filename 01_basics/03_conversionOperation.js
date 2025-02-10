//let score = "46";
//let score = "46abcd"; //NaN
//let score = null; //0
//let score = undefined; // NaN
//let score = string; // NaN
let score = true; // 1

//console.log(typeof score);

let scoreInNumber = Number(score);
//console.log(typeof scoreInNumber);
//console.log(scoreInNumber); // NaN => not a number/ 0

//let isLoggedIn = 1; //1==true/0==false
//let isLoggedIn = ""; // empty string convert false
let isLoggedIn = "web-dev"; // string convert true

let booleanLoggedIn = Boolean(isLoggedIn);
//console.log(isLoggedIn, typeof isLoggedIn);
//console.log(booleanLoggedIn, typeof booleanLoggedIn);

let newNumber = 85;
let stringNum = String(newNumber);
// console.log(stringNum, typeof stringNum);

//****************************Operations****************************/

/*console.log(2+7);
console.log(2*7);
console.log(2**7);
console.log(2/7);
console.log(2%7);*/

/*
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
*/

console.log(true); //true
console.log(+true); //1
console.log(+""); //0

let gameCounter = 100;
//gameCounter++;
++gameCounter;
console.log(gameCounter);
