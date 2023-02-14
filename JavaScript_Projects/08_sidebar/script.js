// Selecting the elements
const hamburgerIconEl = document.querySelector(".hamburger-icon");
const sideBarContainerEl = document.querySelector(".sidebar-container");
const sidebarCloseBtnEl = document.querySelector(".sidebar-close-btn");

// Event listenwer for hamburger icon
hamburgerIconEl.addEventListener("click", function () {
  sideBarContainerEl.classList.toggle("hidden");
});

sidebarCloseBtnEl.addEventListener("click", function () {
  sideBarContainerEl.classList.toggle("hidden");
});
