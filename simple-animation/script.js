
let slideElement = document.querySelectorAll(".slideshow-element")

// console.log(slideElement);

let currentTime = 0;
setInterval(() => {
  currentTime++;
  let currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");

  if (currentTime >= slideElement.length) {
    currentTime = 0;
    slideElement[0].classList.add("current");
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 1000);