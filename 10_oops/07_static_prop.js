class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is: ${this.username}`);
  }

  static createId() {
    return `New userId is ${this.username.toLowerCase()}@123`;
  }
}

const Vishwajit = new User("VISHWAJIT");

// console.log(Vishwajit.createId());

class Student extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const Tony = new Student("Tony", "Tony@example.com");
Tony.logMe();
console.log(Tony.createId());
