export default function menu() {
    const menuButton = document.querySelector("#menu-button");
    const navLinks = document.querySelector(".nav-links");
    const navigation = navLinks?.closest("nav");

    if (!menuButton || !navLinks) {
        return;
    }

    const closeMenu = () => {
        menuButton.classList.remove("active");
        navLinks.classList.remove("active");
        navigation?.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    };

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuButton.classList.toggle("active", isOpen);
        navigation?.classList.toggle("active", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}