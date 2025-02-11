// **************************for of*******************************

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const element of arr) {
  // console.log(element);
}

const greetings = ["hello", "world", "javascript"];
for (const element of greetings) {
  // console.log(element);
}
// ************************** Maps ***************************
//Maps : like object stores data in key value pair
// it saves unique values & save it in a particular order

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("FR", "France");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}
// for in loop are not iterable in MAP

// *************************for in***********************

//^^^^^^^^^^object : for of loop not work on objects^^^^^^^^^^
const myObj = {
  game1: "NFS",
  game2: "GTA-V",
  game3: "Black Myth: Wukong",
};

// for (const [key, value] of myObj) {
//   console.log(key, "=>", value);
// }

for (const key in myObj) {
  // console.log(`${key} is key of ${myObj[key]}`);
}

//array : for in
const programming = ["asm", "c", "js", "py", "cpp", "java"];
for (const key in programming) {
  // console.log(`${key}`);// it returns array's index
  console.log(programming[key]);
}
