// if

const temperature = 47;
if (temperature < 50) {
  //console.log("less than 50");
} else {
  //console.log("greater than 50");
}

//Nested: else if
const balance = 2000;
if (balance < 1000) {
  // console.log(`less than ${balance}`);
} else if (balance < 1500) {
  // console.log(`less than ${balance}`);
} else if (balance < 1999) {
  // console.log(`less than ${balance}`);
} else {
  // console.log(`2000 is <= ${balance}`);
}

// &&
const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy courses");
}
// ||
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;
if (LoggedInFromEmail || LoggedInFromGoogle) {
  console.log("User Logged In");
}
