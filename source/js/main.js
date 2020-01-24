var menuBtn = document.querySelector(".navigation__toggle");
var menu = document.querySelector(".navigation");

document.documentElement.classList.add('js');

menuBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("navigation--active");
});
