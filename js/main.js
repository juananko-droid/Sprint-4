import { header, footer } from "./templates/templates.js";

import darkMode from "./utils/darkMode.js";
import menu from "./utils/menu.js";
import skillsList from "./utils/skillsList.js";

import { createCheatsheetsList } from "./utils/cheatsheetsList.js";

// Insertar header
const headerContainer = document.querySelector("#header");

if (headerContainer) {
    headerContainer.innerHTML = header;
}

// Insertar footer
const footerContainer = document.querySelector("#footer");

if (footerContainer) {
    footerContainer.innerHTML = footer;
}

import { resourcesGenerator } from "./utils/resoucesGeneratos.js";

// Inicializar funcionalidades
menu();
darkMode();
skillsList();
createCheatsheetsList();
resourcesGenerator();


