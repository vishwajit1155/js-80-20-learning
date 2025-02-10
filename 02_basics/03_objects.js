//"Singleton": create using constructed method
//eg: Object.create

//****use of symbol for interview purpose****
const mySym = Symbol("key-123");

//"Object Literals"

let jsUser = {
  name: "vishwajt",
  age: 22,
  [mySym]: "key-123",
  location: "earth01",
  email: "vishwajit@google.com",
  // "email02": "vishwajit@lenovo.com",
  isLoggedIn: true,
  lastLoginDays: ["monday", "saturday", "sunday"],
};

//****2 ways to access values of obj****
// console.log(jsUser.name);
// console.log(jsUser["email"]);

// console.log(jsUser.email02); //we can't access value
// console.log(jsUser["email02"]);

// console.log(jsUser.mySym); //string
// console.log(jsUser.mySym); //when we use only [] /undefined

// console.log(jsUser[mySym]); //symbol/ for interview purpose

//****How to change values in obj****
jsUser.email = "vishwajit@gmail.com";
// console.log(jsUser.email);

// Object.freeze(jsUser); //use to cannot change the values of object
jsUser.email = "vishwajit@Microsoft.com";
// console.log(jsUser);

//adding function in obj
jsUser.greeting = function () {
  console.log("hello developer");
};
jsUser.greetingTwo = function () {
  console.log(`hello developer ${this.name}`); // using property of inside object
};

// console.log(jsUser.greeting);
console.log(jsUser.greeting()); //function Execute
console.log(jsUser.greetingTwo()); //function Execute
