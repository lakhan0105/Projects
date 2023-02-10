// Selecting the Elements
const clickBtnEl = document.querySelector(".click-btn");
const hexColorLabelEl = document.querySelector(".hex-color-label");
const bodyEl = document.querySelector("body");

// Declaration
const hexCodeArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let randomNum;

// Generate Random Number
function genRandomNum() {
  randomNum = Math.floor(Math.random() * hexCodeArray.length);
  return randomNum;
}

// Generate Hex Color Code
function genHexColorCode() {
  let hexCode = "#"; // do not dec it outside

  for (let i = 0; i < 6; i++) {
    hexCode += hexCodeArray[genRandomNum()];
  }

  hexColorLabelEl.textContent = hexCode; // DOM
  bodyEl.style.backgroundColor = hexCode; // Change bg-color of the body element
}

// Event Listener on click button
clickBtnEl.addEventListener("click", function () {
  genHexColorCode();
});
