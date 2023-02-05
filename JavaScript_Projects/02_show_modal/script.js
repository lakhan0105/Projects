// SELECTING THE ELEMENTS ================================================================
const showModalBtn = document.querySelectorAll(".show-modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const modalContainer = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");

// FUNCTIONS =============================================================================
// Function to close the modal
function closeModal() {
  modalContainer.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Function to open the modal
function openModal() {
  modalContainer.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// EVENT LISTENERS =======================================================================
// Event listener on clicking the open modal button
for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener("click", function () {
    modalContainer.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

// Event listener on clicking the close modal button
closeModalBtn.addEventListener("click", closeModal);
