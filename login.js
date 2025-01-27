const slidePage = document.querySelector(".slide-page");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

function updateProgress() {
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
}

function resetProgress() {
  bullet.forEach((b, index) => {
    if (index < current) {
      b.classList.add("active");
      progressCheck[index].classList.add("active");
      progressText[index].classList.add("active");
    } else {
      b.classList.remove("active");
      progressCheck[index].classList.remove("active");
      progressText[index].classList.remove("active");
    }
  });
}

nextBtns.forEach((btn, index) => {
  btn.addEventListener("click", function(event) {
    event.preventDefault();
    if (current < bullet.length) {
      slidePage.style.marginLeft = `-${(current) * 25}%`;
      updateProgress();
      current++;
    }
  });
});

prevBtns.forEach((btn, index) => {
  btn.addEventListener("click", function(event) {
    event.preventDefault();
    if (current > 1) {
      current--;
      slidePage.style.marginLeft = `-${(current - 1) * 25}%`;
      resetProgress();
    }
  });
});

submitBtn.addEventListener("click", function() {
  updateProgress();
  current++;
  setTimeout(function() {
    alert("Your Form Successfully Signed up");
    location.reload();
  }, 800);
});
