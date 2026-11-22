import { header, footer } from "./templates/templates.js";
import darkMode from "./utils/darkMode.js";
import menu from "./utils/menu.js";
import skillsList from "./utils/skillsList.js";
import { createCheatsheetsList } from "./utils/cheatsheetsList.js";
import { resourcesGenerator } from "./utils/resourcesGenerator.js";

// Header and Footer
const headerContainer = document.querySelector("#header");
const footerContainer = document.querySelector("#footer");

if (headerContainer) {
    headerContainer.innerHTML = header;
}

if (footerContainer) {
    footerContainer.innerHTML = footer;
}

// Funcionalidades
menu();
darkMode();
skillsList();
createCheatsheetsList();
resourcesGenerator();
