// Selecting the elements ================================================================
const nextBtnEl = document.querySelector(".next-btn");
const prevBtnEl = document.querySelector(".previous-btn");
const surpriseBtnEl = document.querySelector(".surprise-btn");
const usrImageEl = document.querySelector(".usr-image");
const usrNameEl = document.querySelector(".usr-name");
const usrJobEl = document.querySelector(".usr-job");
const usrReviewEl = document.querySelector(".usr-review");

// Declaration ===========================================================================
let num = 0;
const userNames = ["Lakhan Kumar", "Dinesh", "Sarvan", "Dhanush", "Sachin"];
const userJobs = [
  "Web Developer",
  "Social-Media-Manager",
  "Student",
  "Photographer",
  "Business-Man",
];
const usrReviews = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ad sunt ea, accusantium laudantium eaqueminima, beatae molestiae expedita asperiores, ullam quae repellatadipisci rerum aut fugiatperspiciatis eligendi",

  "llorem ipsum dolor sit amet consectetur adipisicing elit. Nam ad sunt ea, accusantium laudantium eaqueminima consectetur adipisicing elit. Nam ad sunt ea, accusantium laudantium eaqueminima",

  "dolor sit amet consectetur adipisicing elit. Nam ad sunt ea, accusantium laudantium eaqueminima ipsum dolor sit amet consectetur adipisicing elit. Nam ad sunt ea, accusantium laudantium eaqueminima",

  "dolor sit amet consectetur adipisicing elit. Nam ad sunt ea, accusantium laudantium eaqueminimaLorem ipsum dolor sit amet consectetur adipisicing elit. Nam ad sunt ea, accusantium laudantium eaqueminima, beatae molestiae expedita asperiores.",

  "dolor sit amet consectetur adipisicing elit. Nam ad sunt ea, accusantium laudantium eaqueminima ipsum dolor sit amet consectetur adipisicing elit. Nam ad sunt ea, accusantium laudantium eaqueminima",
];

// Function to Update User Details =======================================================
function updateUser(userIndex) {
  usrImageEl.src = `/images/${userIndex}_image.jpg`; // Change user image
  usrNameEl.textContent = userNames[userIndex]; // Change user Name
  usrJobEl.textContent = userJobs[userIndex]; // Change user job
  usrReviewEl.textContent = usrReviews[userIndex]; // change review
}

// Event listener for next Btn ===========================================================
nextBtnEl.addEventListener("click", function () {
  num++;
  if (num < userNames.length) {
    updateUser(num); // update user details with num as index
  } else {
    num = 0;
    updateUser(num); // update user details with num as index
  }
});

// Event Listener for previous Button ====================================================
prevBtnEl.addEventListener("click", function () {
  num--;
  if (num >= 0) {
    updateUser(num); // update user details with num as index
  } else {
    num = userNames.length - 1;
    updateUser(num); // update user details with num as index
  }
});

// Event Listener for Surprise Button ====================================================
surpriseBtnEl.addEventListener("click", function () {
  let randomNum = Math.floor(Math.random() * userNames.length);
  console.log(randomNum);
  updateUser(randomNum); // update user details with randomNum as index
});
