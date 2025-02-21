class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  logMe() {
    console.log(`USENAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourses() {
    console.log(`A new course add by ${this.username}`);
  }
}

const Hitesh = new Teacher("Hitesh", "Hitesh@gmail.com", "******");
// console.log(Hitesh.addCourses());
// Hitesh.addCourses();
const Tony = new User("Tony");

Hitesh.logMe();
Tony.logMe();

console.log(Hitesh instanceof Teacher);
console.log(Hitesh instanceof User);
