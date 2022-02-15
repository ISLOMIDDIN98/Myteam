"use strict";
// const container = document.querySelector(".menu-btn");
// const elhidden = document.querySelector(".directors-info-hidden");

// container.addEventListener("click", function(){
//   // document.querySelectorAll('.menu-btn').forEach(function(menubtn){
//     container.classList.toggle("menu-btn-active");
//     elhidden.classList.toggle("hidden");
//   // });

// });



const elhidden = document.querySelectorAll(".directors-info-hidden");
const eltogger = document.querySelectorAll(".plus-toggler");
const elplusImg = document.querySelectorAll(".plus-img");
const elbodyScroll = document.querySelector("body");

eltogger.forEach((Element, index) => {
  Element.addEventListener("click", function () {
    Element.classList.toggle("toggled-state");
    elhidden[index].classList.toggle("hidden");
    elplusImg[index].classList.toggle("plus-toggled");
  });
});
