/*
const promiseOne = new Promise(function (resolve, reject) {
  //Do an Async task
  // DB calls, Cryptography related, Network

  setTimeout(function () {
    console.log("Async Task-1 Completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
}); //resolve
*/

// ----------------------------------------------------------
/*
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task-2 Completed");
    resolve();
  }, 2000);
}).then(function () {
  console.log("task-2 resolve");
});
*/

// ------------------------------------------------------------
/*
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "xyz", email: "xyz@gmail.com" });
  }, 3000);
});

promiseThree.then(function (user) {
  console.log(user);
});
*/

//-------------------------------------------------------------

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "DOM", password: "****" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

// ----------------------------------------------------

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "JavaScript", password: "****" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 3000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// -------------------------- fetch ---------------------------

// async function getUser() {
//   try {
//     const response = await fetch("https://randomuser.me/api/");
//     // console.log(response);
//     const userData = await response.json();
//     console.log(userData);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUser();

//using promises

fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
