//IIFE :Immediately Invoked Function Expression
// use case: database connection

//1st():definition 2nd():execution

/*(function database() {//named iife
  console.log(`DATABASE CONNECTED `);
})();
*/

//why iife? because of global scope pollution
((name) => {
  console.log(`${name} CONNECTION FAILED :(`);
})("local");
