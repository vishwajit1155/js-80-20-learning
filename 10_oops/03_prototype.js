//Array
let myHeros = ["Batman", "Thor"];

//Object
let heroPower = {
  Batman: "relies on his intellect",
  Thor: "Mjolnir,Stormbreaker",

  getThorPower: function () {
    console.log(`Thor power is ${this.Thor}`);
  },
};

//----create a prototype----

//Object
Object.prototype.Hero = function () {
  console.log(`Hero is present in all Objects`);
};
// heroPower.Hero();
myHeros.Hero();

// Array
Array.prototype.AllHeros = function () {
  console.log(`AllHeros is present in all Arrays`);
};

//heroPower.AllHeros(); // heroPowers have not access of AllHeros
myHeros.AllHeros();

//--------------------Inheritance------------------
const User = {
  name: "Dom",
  email: "DomToretto@gmail.com",
};

const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

//-----Old way-----
Teacher.__proto__ = User;

//-----Modern Syntax-----

Object.setPrototypeOf(TeachingSupport, Teacher);

//------------------------------------------------
let myName = "Bruce     ";
console.log(`Length include with White Spaces ${myName.length}`);

String.prototype.TrueLength = function () {
  // console.log(this);
  console.log(`The True Length is ${this.trim().length}`);
};

myName.TrueLength(); //5
"DomToretto".TrueLength();
