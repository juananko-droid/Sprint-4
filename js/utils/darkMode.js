// export default function DarkMode() {
//     const button = document.querySelector('#dark-mode-button');
//     const page = document.querySelector('#app');

//     if (!button || !page) {
//         return;
//     }

//     button.addEventListener('click', () => {
//         const isDark = page.classList.toggle('dark-mode');
//         button.textContent = isDark ? '🌙' : '☀️';
//         button.setAttribute(
//             'aria-label',
//             isDark ? 'Activar modo claro' : 'Activar modo oscuro'
//         );
//     });
// }
page.classList.toggle("dark-mode");

const isDark = page.classList.contains("dark-mode");

localStorage.setItem(
    "theme",
    isDark ? "dark" : "light"
);

updateButton();

function updateButton() {
    const isDark = page.classList.contains("dark-mode");
    button.textContent = isDark ? "🌙" : "☀️";
}
