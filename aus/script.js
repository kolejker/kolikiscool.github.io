const logo = document.getElementById("logo");
const menu = document.getElementById("menu");

logo.addEventListener("click", function() {
  menu.style.display = "block";
  logo.style.left = "calc(40% - 75px)";
  menu.classList.add("open");
});


