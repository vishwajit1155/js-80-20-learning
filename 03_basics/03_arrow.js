const user = {
  username: "vishwajit",
  email: "xyz@gmail.com",
  welcomemessage: function () {
    console.log(`${this.username}, welcome to website`);
    //console.log(this);//display current context
  },
};
// user.welcomemessage();
// user.username = "Dom";
// user.welcomemessage();

//console.log(this); //returns empty object {} in node.js

function chai() {
  console.log(this); //if use in function returns many values
}
// chai();

function biskut() {
  let username = "xyz";
  console.log(this.username); // it only works on object
}
// biskut();

//+++++++++++ Arrow function ++++++++++

let chaicode = () => {
  console.log(this); // Arrow function returns empty object
};
// chaicode(); //{}

const chaibiskut = () => {
  let username = "xyz";
  console.log(this.username); //
};
//chaibiskut(); //undefined

// CORE arrow function
// () => {}

//1️⃣ Explicit return
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

//2️⃣ Implicit return
// const addTwo = (num1, num2) => num1 + num2; //don't need return kw

//3️⃣
//const addTwo = (num1, num2) => (num1 + num2); //don't need return kw
// console.log(addTwo(505, 303));

const addTwo = (num1, num2) => ({ username: "Dom" }); //object return
console.log(addTwo(1, 2));
