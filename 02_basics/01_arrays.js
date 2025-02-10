// arrays
// JS arrays are resizable and contain mix of different data data types

const myArr = [0, 1, 2, 3, 4, 5];
//console.log(myArr[0]);
const heros = ["Batman", "Ironman", "Thor", "Spiderman", "CaptionAmerica"];
const myArr2 = new Array(44, 66, 75, 23, 11, 45); //another way to declare array

//+++++++++++++++ Array Methods ++++++++++++++++

// myArr.push(6); // add element to END of array
// myArr.push(7);
//myArr.pop(); // remove LAST element of array

// myArr.unshift(100); // add element starting point/not good for optimization
// myArr.shift();// remove FIRST element of array

// console.log(myArr.includes(34)); //QNA
// console.log(myArr.indexOf(6));

const newArray = myArr.join(); //convert into string
//console.log(newArray, typeof newArray);

//console.log(myArr, typeof myArr);

// +++++++++++++++ slice & splice ++++++++++++++++

console.log("A-original", myArr);

const newArr02 = myArr.slice(1, 4);//provide value 1-3/ 4th value not include
console.log(newArr02);
console.log("B-original", myArr);

const newArr03 = myArr.splice(1, 4); //remove value 1-4 /it change original value in array
console.log(newArr03);
console.log("C-original", myArr);
