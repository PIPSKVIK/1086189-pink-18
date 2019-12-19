// var open = document.querySelector(".header__burger");
// var navigation = document.querySelector(".navigation");

// open.addEventListener("click", function (evt) {
//   console.log("клик по кнопке открыть меню");
//   navigation.classList.add("header__menu-closed");
//   open.classList.add("header__menu-closed");
// });

var toggle = document.querySelector(".navigation__toggle");
var menuActiv = document.querySelector(".navigation__nav-list");


toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик");
  toggle.classList.add("navigation__toggle-active");
  menuActiv.classList.add("navigation__menu-activ");
});
