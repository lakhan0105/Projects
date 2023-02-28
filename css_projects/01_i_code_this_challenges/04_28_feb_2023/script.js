const closeBtnEl = document.querySelectorAll(".close-btn");
const cardEl = document.querySelectorAll(".card");

// Event Listener
for (let i = 0; i < closeBtnEl.length; i++) {
  closeBtnEl[i].addEventListener("click", function () {
    cardEl[i].classList.add("hidden");
  });
}
