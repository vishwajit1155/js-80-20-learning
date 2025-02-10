let userName = "vishwajit";
let repoCount = 0;

//console.log(`Hello my name is ${userName} and my repo count is ${repoCount}`);

let gameName = new String("vishwajit-084-xyz"); // another way to declare string

//console.log(gameName[0]); //v
//console.log(gameName.__proto__); //{}

//console.log(gameName.length); //12
//console.log(gameName.toUpperCase()); // String-Method
//console.log(gameName.charAt(5)); // here we pass number
//console.log(gameName.indexOf("t")); // finds idx of char

let newString = gameName.substring(0, 4); // it does not include 4th num value
//console.log(newString);

const anotherString = gameName.slice(4, 4); // it include -ve values
//console.log(anotherString);

const anotherStringOne = "   Web-Development   ";
//console.log(anotherStringOne);
//console.log(anotherStringOne.trim()); // remove white spaces / use in input form section

const url = "https://youtube.com/chaiaur%20code";
console.log(url.replace("%20", "-")); // it required 1st replace-value, 2nd new-value to replace

console.log(url.includes("youtube")); // QNA it returns true/false

console.log(gameName.split("-"));// split the str basis on - or anything

