const programming = ["asm", "c", "js", "py", "cpp", "java"];

// programming.forEach(function (item) {
//   console.log(item);
// });

//ARROW function:

// programming.forEach((val) => {
//   console.log(val);
// });

//declaring outside of froEach
function printMe(item) {
  // console.log(item);
}

programming.forEach(printMe);

// In forEach it take 3 parameter item, index, arr
programming.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

const myCodingLang = [
  {
    languageName: "javaScript",
    languageFileName: "js",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "c++",
    languageFileName: "cpp",
  },
];
myCodingLang.forEach((item) => {
  // console.log(item);
  console.log(item.languageFileName);
});
