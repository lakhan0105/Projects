const galleryImgEl = document.querySelectorAll(".gallery-img");

for (let i = 0; i < galleryImgEl.length; i++) {
  galleryImgEl[i].addEventListener("click", function () {
    console.log("clicked");
    console.log(galleryImgEl[i].src);
  });
}

function previewImg() {
    
}
