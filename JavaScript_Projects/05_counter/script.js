// Selecting the elements ================================================================
const increaseBtnEl = document.querySelector(".increase-btn");
const decreaseBtnEl = document.querySelector(".decrease-btn");
const resetBtnEl = document.querySelector(".reset-btn");
const countValueEl = document.querySelector(".count-value");

// Declaration ===========================================================================
let count = 0;

// FUNCTIONS =============================================================================
// Function to increase count
function increaseCount() {
  count++;
  countValueEl.textContent = count;
}

// Function to decrease count
function decreaseCount() {
  count--;
  countValueEl.textContent = count;
}

// Function to reset count
function resetCount() {
  count = 0;
  countValueEl.textContent = count;
}

// Function to change the color of the count El
function changeColor() {
  if (count > 0) {
    countValueEl.style.color = "green";
  } else if (count < 0) {
    countValueEl.style.color = "red";
  } else {
    countValueEl.style.color = "purple";
  }
}

// EVENT LISTENERS =======================================================================
// Event Listener for Increase btn
increaseBtnEl.addEventListener("click", function () {
  increaseCount();
  changeColor();
});

// Event Listener for Decrease btn
decreaseBtnEl.addEventListener("click", function () {
  decreaseCount();
  changeColor();
});

// Event Listener for reset btn
resetBtnEl.addEventListener("click", function () {
  resetCount();
  changeColor();
});
