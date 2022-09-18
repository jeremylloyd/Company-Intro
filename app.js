elements = document.getElementsByClassName("preload");

window.onload = function () {
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.remove("preload");
  }
};
