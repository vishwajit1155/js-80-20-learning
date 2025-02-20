//---------------obj literal------------------

const user = {
  userName: "rock",
  logInCount: "4",
  signedIn: true,
  getUserDetails: function () {
    // console.log("Got user details form database");
    console.log(`username: ${this.userName}`);
    console.log(this); //current context
  },
};

// console.log(user.signedIn);
// console.log(user.getUserDetails());
console.log(this); // returns empty {}

//---------------constructor function--------------

function User(username, password, isLoggedIn) {
  this.username = username;
  this.password = password;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    console.log(`Welcome ${this.username}`);
  };
  
  return this;
}

const userOne = new User("Bruce", "****", true);
const userTwo = new User("Tony", "****", false);
console.log(userOne);
console.log(userTwo);
