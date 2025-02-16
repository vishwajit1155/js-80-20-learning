// generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());
let intervalId;
const startChangingColor = function () {
  function ChangBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
  intervalId = setInterval(ChangBgColor, 1000);
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

// start
document.querySelector("#start").addEventListener("click", startChangingColor);
// stop
document.querySelector("#stop").addEventListener("click", stopChangingColor);
