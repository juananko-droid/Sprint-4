import {cheatsheets} from "../data/cheatsheets.js";

export function createCheatsheetsList() {

    const container = document.querySelector(
        "#cheatsheets-container"

    );

    if (!container) return;

    container.innerHTML = cheatsheets.map(item => `
        <a href="${item.link}" class="cheatsheet-card">
            
        <img src="${item.icon}" alt="${item.name}" >
            
        <h3>${item.name}</h3>
        <p> Consulta tu guía rápida de ${item.name} aquí</p>
       
     </a>
`).join("");
}
      
