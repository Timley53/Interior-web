"strict mode";

document.querySelector(".bar").addEventListener("click", function () {
  document.querySelector(".nav-bars").classList.toggle("display");
  document.querySelector(".bar").classList.toggle("bar-pressed");
  document.querySelector(".fa-solid").classList.toggle("fa-xmark");
});

// document.querySelector(".bar").addEventListener("click", function () {
//   document.querySelector(".fa-solid").classList.toggle("fa-bars");
//   document.querySelector(".fa-solid").classList.toggle("fa-xmark");
//   document.querySelector(".nav-bars").classList.toggle("display");
// });
