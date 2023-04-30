var elements = document.getElementsByClassName("navbar-button");

var closeMenu = function() {
    if (document.getElementById("navbarNavAltMarkup").classList.contains("show")) {
        document.getElementById("navbar-toggle-btn").click();
    }
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', closeMenu, false);
}