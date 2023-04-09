const socialLinks = document.querySelectorAll(".social-link");

socialLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.style.transform = "scale(0.9)";
    setTimeout(() => {
      link.style.transform = "scale(1)";
    }, 200);
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "15px 15px";
    document.getElementById("logo").style.fontSize = "30px";
  } else {
    document.getElementById("navbar").style.padding = "70px 15px";
    document.getElementById("logo").style.fontSize = "55px";
  }
}