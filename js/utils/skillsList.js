import { skills } from "../data/skills.js";

export default function skillsList() {
    const container = document.querySelector("#skill-container");

    if (!container) {
        return;
    }

    const dominatedSkills = skills.filter(skill => skill.state === "dominada");

    container.innerHTML = dominatedSkills.map(skill => `
        <article class="skill-card">
            <img src="${skill.icon}" alt="Icono de ${skill.name}">
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
            <div class="skill-tags">
                ${skill.tags.map(tag => `<span>${tag}</span>`).join("")}
            </div>
        </article>
    `).join("");
}
