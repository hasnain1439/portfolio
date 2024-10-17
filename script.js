let iconBar = document.getElementById("icon-bar");
let dropDownNavbar = document.getElementById("sm-navbar");
let iconMark = document.getElementById("icon-xmark");
let navbar = document.getElementById("navbar");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 150) {
    navbar.classList.remove("d-none");
    navbar.classList.add("d-block");
  } else if (document.documentElement.scrollTop < 150) {
    navbar.classList.remove("d-block");
    navbar.classList.add("d-none");
  }
};

if (iconBar) {
  iconBar.addEventListener("click", function () {
    dropDownNavbar.classList.add("row");
    dropDownNavbar.classList.remove("d-none");
    // alert("hello")
  });
}
if (iconMark) {
  iconMark.addEventListener("click", function () {
    dropDownNavbar.classList.add("d-none");
  });
}
