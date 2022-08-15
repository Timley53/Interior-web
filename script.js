"strict mode";
document.querySelector(".bar").addEventListener("click", function () {
  document.querySelector(".fa-solid").classList.toggle("fa-bars");
  document.querySelector(".fa-solid").classList.toggle("fa-xmark");
  document.querySelector(".nav-bar").classList.toggle("display");
});
