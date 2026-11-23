export const header = `
    <header class="site-header">
        <div class="logo">JR
        </div>

        <nav aria-label="Navegacion principal">
            <ul id="nav-links" class="nav-links">
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./about.html">Sobre mí</a></li>
                <li><a href="./index.html#skills">Habilidades</a></li>
                <li><a href="./index.html#aficiones">Aficiones</a></li>
                <li><a href="./contacto.html">Contacto</a></li>
                <li><a href="./index.html#cheatsheets">Cheatsheets</a></li>
                <li><a href="./recursos.html">Recursos</a></li>
            </ul>
        </nav>
        
        <div class="header-buttons">
            <button id="dark-mode-button" type="button" aria-label="Cambiar modo">
                ☀️
            </button>
            <button id="menu-button" type="button" aria-label="Abrir menú" aria-controls="nav-links" aria-expanded="false">
                ☰
            </button>
        </div>
    </header>

`;

export const footer = `
    <footer class="site-footer">
        <p>&copy; 2026 Mi Primera Página Web | Juan Antonio Ruiz. Todos los derechos reservados.</p>
        <div class="social-links">
            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                <span class="icon">🐦</span>
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <span class="icon">👔</span>
            </a>
            <a href="https://github.com" target="_blank" aria-label="GitHub">
                <span class="icon">🐙</span>
            </a>
            
        </div>
    </footer>
`;