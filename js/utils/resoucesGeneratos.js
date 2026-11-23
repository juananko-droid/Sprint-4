
export function resourcesGenerator() {
    const tabs = document.querySelectorAll(".tab");
    const panels = document.querySelectorAll(".tab-panel");

    if (!tabs.length || !panels.length) return;

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const selected = tab.dataset.tab;

            tabs.forEach(button => {
                const isActive = button === tab;

                button.classList.toggle("active", isActive);
                button.setAttribute(
                    "aria-selected",
                    String(isActive)
                );
            });

            panels.forEach(panel => {
                panel.hidden =
                    panel.id !== `panel-${selected}`;
            });
        });
    });
}
