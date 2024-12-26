"use strict";

const hidden = document.querySelectorAll(".hidden");
const hamburger = document.querySelector(".iconOpen");
const hamburgerClose = document.querySelector(".iconClose");

hamburger.addEventListener("click", function () {
  for (const element of hidden) {
    element.style.display = "none";
  }
  hamburger.style.display = "none";
  hamburgerClose.style.display = "block";
});

hamburgerClose.addEventListener("click", function () {
  for (const element of hidden) {
    element.style.display = "flex";
  }
  hamburger.style.display = "block";
  hamburgerClose.style.display = "none";
});
