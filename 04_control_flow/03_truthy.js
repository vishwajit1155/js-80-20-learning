// const userEmail = "v@xyz.ai"; // string is a truthy value
// const userEmail = ""; // Empty string is falsy value
const userEmail = []; // Empty array is a truthy value

if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Don't Have User Email");
}

// Truthy Values:
// 1, "0", "__", [], {}, function(){},

// Falsy Values:
/* false, 0, -0, BigInt: 0n, "", null, undefined, NaN*/

//Array
if (userEmail.length == 0) {
  // console.log("Array is empty");
}

//Obj
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

/* All returns TRUE
console.log(false == 0);
console.log(0 == "");
console.log(false == "");
*/

// Nullish Coalescing Operator (??): null, undefined
// use case: database call, if got null response or undefined for avoid this we use ??

let val1;
// val1 = 5 ?? 15;
// val1 = null ?? 15;
// val1 = undefined ?? 15;
val1 = undefined ?? 15 ?? 30; // returns 1st value after undefined
console.log(val1);
