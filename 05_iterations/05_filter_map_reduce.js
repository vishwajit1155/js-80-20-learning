const programming = ["asm", "c", "js", "py", "cpp", "java"];

//forEach method doesn't return any value

const value = programming.forEach((item) => {
  // console.log(item);
  return item;
});
// console.log(value); //undefined

//******************************* Filter *********************************
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

const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 1984,
    edtion: "2004",
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    publish: 1992,
    edtion: "2008",
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 1999,
    edtion: "2004",
  },
  {
    title: "Book Four",
    genre: "Non-Fiction",
    publish: 1989,
    edtion: "2014",
  },
  {
    title: "Book Five",
    genre: "Science",
    publish: 2009,
    edtion: "2014",
  },
  {
    title: "Book Six",
    genre: "Fiction",
    publish: 1987,
    edtion: "2010",
  },
  {
    title: "Book Seven",
    genre: "History",
    publish: 1986,
    edtion: "1996",
  },
];

let userBooks = books.filter((bk) => {
  return bk.genre === "History";
});
// console.log(userBooks);

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
// console.log(userBooks);

//********************************* Map ******************************* */
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const addTen = myNumbers.map((num) => num + 10);
// console.log(addTen);

// chaining

const chainOnNumber = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

// console.log(chainOnNumber);

//******************************* Reduce ******************************** */
const myArray01 = [1, 2, 3, 4, 5];
const myTotal = myArray01.reduce((accVal, currVal) => {
  // console.log(`acc: ${accVal} and curr: ${currVal}`);
  return accVal + currVal;
}, 3); // the 0 is first value we pass as acc

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "JAVASCRIPT course",
    price: 2999,
  },
  {
    itemName: "PYTHON course",
    price: 4999,
  },
  {
    itemName: "AI/ML course",
    price: 8999,
  },
  {
    itemName: "APP-DEV course",
    price: 5999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(`Total Price To Pay is ${priceToPay}`);
