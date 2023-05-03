// Navbar closing logic
var navbarToggleBtn = document.getElementById("navbar-toggle-btn");
var navItems = document.getElementsByClassName("nav-item");

var closeMenu = function() {
    if (document.getElementById("navbarSupportedContent").classList.contains("show")) {
        navbarToggleBtn.click();
    }
};

for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', closeMenu, false);
}

navbarToggleBtn.addEventListener('focusout', () => closeMenu());