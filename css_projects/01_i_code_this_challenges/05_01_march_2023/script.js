const galleryImgEl = document.querySelectorAll(".gallery-img");
const modalContainerEl = document.querySelector(".modal-container");
const overlayEl = document.querySelector(".overlay");
const modalImgEl = document.querySelector(".modal-img");
const closeModalBtnEl = document.querySelector(".close-modal-btn");

// Function to show the modal and overlay
function showModal() {
  modalContainerEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
  closeModalBtnEl.classList.remove("hidden");
}

// Function to hide the function and overlay
function hideModal() {
  modalContainerEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
  closeModalBtnEl.classList.add("hidden");
}

// Function to show the img
function previewImg(imgSrc) {
  modalImgEl.src = imgSrc;
}

// Event Listener on clicking the images in the gallery
for (let i = 0; i < galleryImgEl.length; i++) {
  let clickedImg;
  galleryImgEl[i].addEventListener("click", function () {
    showModal(); // display modal and overlay
    clickedImg = galleryImgEl[i].src; // grab the src of clicked img
    previewImg(clickedImg); // preview the img of the clicked img
  });
}

// Event Listener on clicking the overlay
overlayEl.addEventListener("click", hideModal);

// Event listener when clicked on close btn
closeModalBtnEl.addEventListener("click", hideModal);
