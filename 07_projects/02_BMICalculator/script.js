const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // we don't want to submit value
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please Enter Valid Height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please Enter Valid Weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
