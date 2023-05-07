// Navbar closing logic
var navbarToggleBtn = document.getElementById("navbar-toggle-btn");
var navItems = document.getElementsByClassName("nav-item");

var closeMenu = function () {
    if (
        document
            .getElementById("navbarSupportedContent")
            .classList.contains("show")
    ) {
        navbarToggleBtn.click();
    }
};

// close on click outside
navbarToggleBtn.addEventListener("focusout", () => closeMenu());

// close on click navbar item
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", closeMenu, false);
}

// close on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top-navbar").style.top = "0px";
  } else {
    document.getElementById("top-navbar").style.top = "-10rem";
  }
  prevScrollpos = currentScrollPos;
}

// end navbar closing logic
