function sayMyName() {
  //function define
  console.log("v");
  console.log("i");
  console.log("s");
  console.log("h");
  console.log("u");
}
// sayMyName(); //function call

/*function addTwoNum(num1, num2) {
  //parameter
  console.log(num1 + num2);
}*/
//addTwoNum(47, 34);//"arguments"

//addTwoNum(4 + "4"); //convert ans string
//addTwoNum(4 + "a"); //convert ans string
//addTwoNum(4 + null); //NaN

function addTwoNum(num1, num2) {
  // let result = num1 + num2;
  // return result;
  return num1 + num2; // 2nd way
  console.log("END"); //after return keyword dose not execute next line
}
let result = addTwoNum(3, 9); //store result in variable
// console.log("Result:", result); //undefined because need to use "return" 🔁

function logInUser(username = "sam") {
  //sam is default value
  // if (username === undefined) {
  if (!username) {
    //professional way
    console.log("please enter username");
    return;
  }
  return `${username} is logged in`;
}
//console.log(logInUser("vishwajit"));
// console.log(logInUser("")); // is logged in
// console.log(logInUser("Rolex"));

function calculateCartPrice(val1, v1l2, ...num1) {
  //val1&2 stores 1&2 value
  //... rest operator/combine all value returns in a array format
  return num1;
}
//console.log(calculateCartPrice(200, 300, 400, 500, 600)); // providing multiple values

//OBJECT
const user = {
  username: "vishwajit",
  email: "vishwajit@gmail.com",
  password: "******",
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} & password is ${anyObject.password}`
  );
}
// handleObject(user);
// handleObject({
//   username: "sam",
//   password: "xyz345",
// });

//Also we pass ARRAY
const myNewArray = [34, 53, 65, 23];

// create function which accept array & returns 2nd value
function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2457, 1155, 8005, 6776]));
