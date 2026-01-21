/**
 * Smooth Scroll Module
 * Gerencia a navegação suave entre seções
 */

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('.scroll-link').forEach(link => {
            link.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    handleClick(e) {
        const href = e.currentTarget.getAttribute('href');
        
        if (!href || !href.startsWith('#')) return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        
        const yOffset = -80;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });

        // Foca no elemento após a animação
        setTimeout(() => {
            if (target.focus) target.focus();
        }, 700);
    }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new SmoothScroll();
});
