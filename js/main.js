import { header, footer } from "./templates/templates.js";
import darkMode from "./utils/darkMode.js";
import menu from "./utils/menu.js";
import skillsList from "./utils/skillsList.js";

const headerContainer = document.querySelector("#header");
const footerContainer = document.querySelector("#footer");

if (headerContainer) {
    headerContainer.innerHTML = header;
}

if (footerContainer) {
    footerContainer.innerHTML = footer;
}

menu();
darkMode();
skillsList();