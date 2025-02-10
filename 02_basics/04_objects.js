//****"Singleton": create using constructed method****

const tinderUser = new Object();

tinderUser.id = "123xyz";
tinderUser.name = "sam";
tinderUser.email = "sam@chatgpt.com";
tinderUser.isLoggedIn = "true";

// console.log(tinderUser);

const regularUser = {
  email: "dom@carversal.com",
  fullname: {
    userfullname: {
      firstname: "Dom",
      lastname: "Toretto",
    },
  },
};

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

//combine multiple objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 }; //creates objects inside objects
//const obj3 = Object.assign({}, obj1, obj2); //copy the value of all enumerable own properties 1 or more objects /{} optional parameter
const obj3 = { ...obj1, ...obj2 }; //spreade operation
//console.log(obj3);

const user = [
  {
    id: 1,
    email: "vp@gmail.com",
  },
  {
    id: 1,
    email: "vp@gmail.com",
  },
  {
    id: 1,
    email: "vp@gmail.com",
  },
];

user[1].email;
// console.log(tinderUser);

console.log(Object.keys(tinderUser)); // returns keys in Array
console.log(Object.values(tinderUser)); // returns values in Array
console.log(Object.entries(tinderUser)); // returns Array inside Array

console.log(tinderUser.hasOwnProperty("isLoggedIn"));//finds if value exists or not
