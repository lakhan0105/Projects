// Selecting the elements
const buttonsEl = document.querySelectorAll(".buttons");
const cardEl = document.querySelectorAll(".card");

// forEach button clicked, grab the parent el and toggle the shhow-text class
buttonsEl.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let parentEl = e.currentTarget.parentElement.parentElement;
    parentEl.classList.toggle("show-text");
  });
});

// DOUBTS
// - cards are changing its position when expaneded and collapsed, how to fix it?
