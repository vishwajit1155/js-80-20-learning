//tells hidden properties/values of obj
Object.getOwnPropertyDescriptor;

/*
console.log(Math.PI);
//we want to change original value of PI
Math.PI = 25;
console.log(Math.PI);
*/

const discriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(discriptor);

const chai = {
  name: "gingir chai",
  price: 40,
  isAvailable: "true",

  orderChai: function () {
    console.log("wait a minute");
  },
};
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//How to create Property to not change to allow
// Object.defineProperty(chai, "name", {
//   writable: false,
//   enumerable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of chai) {
//   console.log(`${key} and ${value}`);
// }
// chai is not iterable

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
