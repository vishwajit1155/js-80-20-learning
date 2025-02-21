class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `password ${this.password} encrypted successfully :)`;
  }
  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const Batman = new User("Bruce", "BruceWayne@gmail.com", "******");

console.log(Batman.encryptPassword());
console.log(Batman.changeUserName());



//---------------Behind the scene-------------------

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptPassword = function () {
  return `password ${this.password} encrypted successfully :)`;
};
user.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const IronMan = new user("Tony", "TonyStrak@gmail.com", "******");

console.log(IronMan.encryptPassword());
console.log(IronMan.changeUserName());
