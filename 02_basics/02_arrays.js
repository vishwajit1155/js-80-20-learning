const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["batman", "superman", "flash"];

// marvelHeros.push(dcHeros); // Array inside array

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros); //concat returns new array
// console.log(allHeros);

//sprade operation
let allNewHeros = [...marvelHeros, ...dcHeros];
//console.log(allNewHeros);

let differentArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
// console.log(differentArr);

let simpleArr = differentArr.flat(Infinity); // concat multiple array/array inside array
// console.log(simpleArr);

// console.log(Array.isArray("vishwajit"));
// console.log(Array.from("vishwajit"));// provide value and it convert into array
// console.log(Array.from({name: "javaScript"}));// INTERESTING/ returns empty []/ provide key/value

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //returns new array from set of elements
