// var open = document.querySelector(".header__burger");
// var navigation = document.querySelector(".navigation");

// open.addEventListener("click", function (evt) {
//   console.log("клик по кнопке открыть меню");
//   navigation.classList.add("header__menu-closed");
//   open.classList.add("header__menu-closed");
// });

var toggle = document.querySelector(".navigation__toggle");
var menuActiv = document.querySelector(".navigation__nav-list");
var toggleOpen = document.querySelector(".navigation__toggle-open");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("сlick close");
  toggle.classList.add("navigation__menu-activ");
  menuActiv.classList.add("navigation__menu-activ");
  toggleOpen.classList.add("navigation__button-activ");
});

toggleOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("click open");
  toggle.classList.remove("navigation__menu-activ");
  menuActiv.classList.remove("navigation__menu-activ");
  toggleOpen.classList.remove("navigation__button-activ");
});
