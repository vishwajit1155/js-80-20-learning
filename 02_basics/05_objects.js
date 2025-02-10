// object de-structure

const course = {
  courseName: "js in hindi",
  coursePrice: 999,
  courseInstructor: "hitesh",
};

//console.log(course.courseInstructor);

// another way to accessing value

const { courseInstructor: instructor } = course; // object de-structuring
console.log(instructor); // changing name courseInstructor to "instructor"

// API
// JSON : javaScript Object Notation

/* eg1️⃣: similar like Object format
{
  "name": "vishwajit",
  "coursename": "JS in Hindi",
  "pirce": "FREE"
}
*/
/* eg2️⃣: Array format
[
  {},
  {},
  {},
]
*/
