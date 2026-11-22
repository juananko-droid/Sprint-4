import {cheatsheets} from "../data/cheatsheets.js";

export function createCheatsheetsList() {

    const container = document.querySelector(
        "#cheatsheets-container"

    );

    if (!container) return;

    container.innerHTML = cheatsheets.map(item => `
        <a heref="${item.link}" class="cheatsheet-card">
            
        <img src="${item.icon}" alt="${item.name}" >
            
        <h3>${item.name}</h3>
        <p> Cunsuta tu guía rápida de ${item.name} aquí</p>
       
     </a>
`).join("");
}
      
