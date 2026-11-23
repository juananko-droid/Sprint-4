export default function darkMode() {
    const button = document.querySelector("#dark-mode-button");
    const page = document.querySelector("#app");

    if (!button || !page) return;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        page.classList.add("dark-mode");
    }

    updateButton();

    button.addEventListener("click", () => {
        const isDark = page.classList.toggle("dark-mode");

        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );

        updateButton();
    });

    function updateButton() {
        const isDark = page.classList.contains("dark-mode");
        button.textContent = isDark ? "🌙" : "☀️";
    }
}