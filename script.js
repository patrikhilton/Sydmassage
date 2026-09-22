const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

    const menuIsOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

});


/* Close menu after clicking a navigation link */

const navLinks = document.querySelectorAll(".nav-menu > a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});