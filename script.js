window.addEventListener("scroll", function(e) {
  var nav = document.getElementById("nav");
  if (
    document.documentElement.scrollTop >= 50 ||
    document.body.scrollTop > window.innerHeight
  ) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
  } else {
    nav.classList.add("nav-transparent");
    nav.classList.remove("nav-colored");
  }
});
