// Selecting the Elements
const togglerEl = document.querySelector(".toggler");
const navMiddleEl = document.querySelector(".nav-middle");

// Add event listener
togglerEl.addEventListener("click", function () {
  console.log("btn");
  navMiddleEl.classList.toggle("hidden");
});
