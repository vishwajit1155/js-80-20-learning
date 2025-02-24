const myArr = [];

//2 types of ARRAY
//1️⃣ continuos and 2️⃣ Holey

//another type

//1️⃣SMI (small integer) packed SMI elements
//2️⃣packed element
//3️⃣Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5];
//packed SMI elements

arrTwo.push(6.0);
//packed Double elements

arrTwo.push("7"); //string
//packed elements

arrTwo[10] = 11;
//Holey elements

console.log(arrTwo); //3 empty items

console.log(arrTwo.length); //11

console.log(arrTwo[9]); //undefined

// how array find index value?
// bound check/easy
//hasOwnProperty(arrTwo, 9);
//hasOwnProperty(arrTwo.prototype, 9);
//hasOwnProperty(Object.prototype, 9);

//holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]);

//highest optimize: SMI > DOUBLE > PACKED

const arrFour = new Array(3);
//just 3 hols. HOLEY_SMI_ELEMENTS
arrFour[0] = "1"; //Holey elements
arrFour[1] = "2"; //Holey elements
arrFour[2] = "3"; //Holey elements

//OPTIMIZED WAY:
const arrFive = [];
arrFive.push("1"); //Packed elements
arrFive.push("2"); //Packed elements
arrFive.push("3"); //Packed elements

const arrSix = [1, 2, 3, 4, 5];
//arrSix.push(NaN);//Packed Double
//arrSix.push(Infinity);//Packed Double
