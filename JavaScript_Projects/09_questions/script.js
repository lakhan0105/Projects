const hamburgerEl = document.querySelectorAll(".hamburger-icon");
const answerEl = document.querySelectorAll(".answer");

for (let i = 0; i < hamburgerEl.length; i++) {
  hamburgerEl[i].addEventListener("click", function () {
    console.log(hamburgerEl[i]);
    answerEl[i].classList.toggle("hidden");
  });
}
