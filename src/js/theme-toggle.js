/**
 * Theme Toggle Module
 * Gerencia a alternância entre temas claro e escuro
 */

class ThemeManager {
    constructor() {
        this.btn = document.getElementById('theme-toggle');
        this.icon = this.btn?.querySelector('.theme-icon i');
        this.init();
    }

    init() {
        if (!this.btn || !this.icon) return;

        // Carrega tema salvo
        const savedTheme = localStorage.getItem('theme');
        this.setTheme(savedTheme === 'light');

        // Event listener
        this.btn.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(isLight) {
        if (isLight) {
            document.body.classList.add('light-theme');
            this.icon.classList.remove('fa-moon');
            this.icon.classList.add('fa-sun');
        } else {
            document.body.classList.remove('light-theme');
            this.icon.classList.remove('fa-sun');
            this.icon.classList.add('fa-moon');
        }
    }

    toggleTheme() {
        const isLight = !document.body.classList.contains('light-theme');
        this.setTheme(isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});
