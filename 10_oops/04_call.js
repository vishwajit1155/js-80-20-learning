function SetUserName(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function CreateUser(username, email, password) {
  SetUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const user = new CreateUser("Bruce", "brucewayne@gmail.com", "******");
console.log(user);
