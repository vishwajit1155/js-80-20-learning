//for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best num");
  }
  // console.log(element);
}

//Nested loop
for (let i = 1; i <= 10; i++) {
  //console.log(`Outer loop value ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and Outer loop value ${i}`);
    //console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Array
let myArray = ["BATMAN", "SUPERMAN", "FLASH"];
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  // console.log(element);
}

// break and continue:
/*
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log(`i value found ${i}`);
    break;
  }
  console.log(`value of i is ${i}`);
}
*/

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log(`found value of i == 5  ${i}`);
    continue;
  }
  console.log(`value of i is ${i}`);
}
