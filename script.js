
// Show/Hide Nav on scroll 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-165px";
  }
  prevScrollpos = currentScrollPos;
}


// Add class to nav on scroll 
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

