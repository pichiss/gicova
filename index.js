const header = document.querySelector('.hdWrap');
window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    header.classList.add("down");
  } else {
    header.classList.remove("down");
  }
});


