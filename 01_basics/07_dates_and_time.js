// Dates

let myDate = new Date();

//console.log(typeof myDate); // obj

console.log(myDate.toString()); // convert into readable format

console.log(myDate.toDateString());// returns only day and date

console.log(myDate.toLocaleString()); // date and time

// let myCreatedDate = new Date(2024,0,11); // here month start from 0
// let myCreatedDate = new Date(2024, 0, 11, 5, 7); // we also add time
// let myCreatedDate = new Date("2024-02-19");// yyyy-mm-dd
let myCreatedDate = new Date("02-19-2024"); // mm-dd-yyyy
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); // use for quiz/pol design

console.log(myTimeStamp); // provide time in milliseconds
console.log(myCreatedDate.getTime()); // provide time in milliseconds

console.log(Math.floor(Date.now() / 1000));// convert into seconds

const newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
