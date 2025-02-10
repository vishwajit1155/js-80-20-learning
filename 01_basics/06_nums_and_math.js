const score = 6587; // automatically define he is number
//console.log(score);

const balance = new Number(10000); // manually define number
//console.log(balance);

//console.log(balance.toString()); // convert in String and then String Methods also can apply on number

//console.log(balance.toFixed(2)); // used in e-commerce website

const otherNum = 457.8745;
//console.log(otherNum.toPrecision(3)); // it returns a string

const hundreds = 1000000;
//console.log(hundreds.toLocaleString("en-IN"));// add commas/en-IN used for indian number system

//++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++
console.log(Math); // obj

//console.log(Math.abs(-8)); // convert only -ve into +ve value
//console.log(Math.round(6.3)); // round of value

//console.log(Math.floor(2.3)); // we can control value/set to TOP value
//console.log(Math.ceil(2.9)); // we can control value/set to BOTTOM value

//console.log(Math.min(7, 34, 6, 34, 2, 776)); // find min value/also have max

//console.log(Math.random()); //generate random values between 0 & 1

console.log(Math.floor(Math.random() * 10) + 1); // +1 to avoid to generate 0 and minimum value should be 1

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // generate values between 10 to 20


