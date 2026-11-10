const navbarShell = document.querySelector(".navbar-shell");

if (navbarShell) {
    const updateNavbar = () => {
        navbarShell.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    window.addEventListener("scroll", updateNavbar, { passive: true });
    updateNavbar();
}