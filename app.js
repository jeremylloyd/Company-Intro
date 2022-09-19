elements = document.getElementsByClassName("preload");

window.onload = function () {
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.remove("preload");
  }
};

dialog = document.querySelector("dialog");
menu = document.querySelector("#menu");
menuClose = document.querySelector("#menu-close");
dialogButtons = document.querySelectorAll("dialog li button");

menu.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", closeMenu);
for (i = 0; i < dialogButtons.length; i++) {
  dialogButtons[i].addEventListener("click", toggleExpandParent);
}

function toggleMenu() {
  dialog.style.display = "flex";
}

function closeMenu() {
  dialog.style.display = "none";
}

function toggleExpandParent() {
  let par = this.parentElement;
  if (par.classList.contains("menu-collapsed")) {
    par.classList.remove("menu-collapsed");
  } else {
    par.classList.add("menu-collapsed");
  }
}
