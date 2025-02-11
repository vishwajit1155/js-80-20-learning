const programming = ["asm", "c", "js", "py", "cpp", "java"];

//forEach method doesn't return any value

const value = programming.forEach((item) => {
  // console.log(item);
  return item;
});
// console.log(value); //undefined

//filter
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const smallNums = myNum.filter((num) => num > 4);
/*
const smallNums = myNum.filter((num) => {
  return num > 4;
});
console.log(smallNums); // 5,6,7,8,9
*/

// using by forEach:
/*
const newNum = [];
myNum.forEach((num) => {
  if (num > 4) {
    newNum.push(num);
  }
});
console.log(newNum);
*/
