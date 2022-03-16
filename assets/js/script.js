"use strict";
var carouselOneByOne = new PureJSCarousel({
  carousel: ".your-selector-for-carousel",
  slide: ".your-selector-for-carousel-slide",
  oneByOne: true,
});
var carouselOneByOne = new PureJSCarousel({
  carousel: ".your-selector-for-carousel2",
  slide: ".your-selector-for-carousel-slide2",
  oneByOne: true,
});

//wishlist icon

let wishBtn = document.querySelectorAll(".product__wishlist");

wishBtn.forEach((item) => {
  item.addEventListener("click", function addToWishlist() {
    if (this.children[0].classList.contains("disappear")) {
      this.children[1].classList.add("disappear");
      this.children[0].classList.remove("disappear");
    } else {
      this.children[0].classList.add("disappear");
      this.children[1].classList.remove("disappear");
    }
  });
});

// form started

let contactForm = document.querySelector("#newsletter-form");
let errorBox = document.querySelector("#contact .error-message");
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInput();
});

const email = document.querySelector("#newsletter__input");
const warning = document.querySelector("#newsletter__warning");
function checkInput() {
  if (email.value == "" || !regexEmail.test(email.value) || email.length > 50) {
    email.style.border = "2px solid red";
    email.style.borderRadius = "4px";
    warning.innerText = "Please enter valid e-mail address!";
    warning.style.backgroundColor = "crimson";
    warning.style.color = "white";
    warning.style.padding = "10px";
    warning.style.borderRadius = "4px";
  } else {
    email.style.border = "2px solid green";
    email.style.borderRadius = "4px";
    warning.innerText = `Please check your e-mail (${email.value})`;
    warning.style.backgroundColor = "green";
    warning.style.color = "white";
    warning.style.padding = "10px";
    warning.style.borderRadius = "4px";
    contactForm.reset();
  }
}
email.addEventListener("focus", function () {
  email.style.border = "3px dashed green";
});
email.addEventListener("blur", function () {
  email.style.border = "none";
  warning.innerText = "SIGN UP FOR OUR NEWSLETTER";
  warning.style.background = "none";
  warning.style.color = "black";
});

//mobile hamburger menu

const hamburger = document.querySelector(".mobile__hamburger");
const mobileNavbar = document.querySelector(".mobile__navbar");
hamburger.addEventListener("click", function () {
  mobileNavbar.classList.toggle("active");
});
const navItem = document.querySelectorAll(".mobile__navbar .navbar__item");
navItem.forEach((item)=> {
  item.addEventListener("click", function () {
    if(this.children[1]!=null){
      this.children[1].classList.toggle("active");
    }
    
  });
});
