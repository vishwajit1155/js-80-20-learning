let a = 300; //GLOBAL scope

if (true) {
  //BLOCK scope
  let a = 10;
  const b = 20;
  // var c = 30;
  //console.log("INNER:", a);
}
// console.log(a);//not defined
// console.log(b);
// console.log(c); //returns 30

// console.log(a);

//Nested Scope

function one() {
  const username = "vishwajit";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //console.log(website);//not accessible
  two();
}
// one();
//child function access parent functions values/parent cannot access child's value

if (true) {
  const firstName = "Leo";
  if (firstName === "Leo") {
    const surName = "Das";
    //console.log(`${firstName} ${surName}`); //accessing parent's value
  }
  //console.log(surName);//accessing child's value
}
// console.log(firstName);// not accessing/BLOCK scope

// +++++++++++++++++++++ interesting +++++++++++++++++++++++++++

//eg:1️⃣
console.log(addOne(5)); //before declaration call

function addOne(num) {
  return num + 1;
}

//eg:2️⃣
addTwo(5); // error/ cannot access before initialization

const addTwo = function (num) {
  return num + 2;
};
