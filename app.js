elements = document.getElementsByClassName("preload");

window.onload = function () {
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.remove("preload");
  }
};

dialog = document.querySelector("dialog");

menu = document.querySelector("#menu");
menu.addEventListener("click", toggleMenu);

menuClose = document.querySelector("#menu-close");
menuClose.addEventListener("click", closeMenu);

function toggleMenu() {
  dialog.style.display = "flex";
}

function closeMenu() {
  dialog.style.display = "none";
}
