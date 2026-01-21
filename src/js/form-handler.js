/**
 * Form Handler Module
 * Gerencia o envio do formulário de contato
 */

class FormHandler {
    constructor() {
        this.form = document.querySelector('form');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(event) {
        event.preventDefault();
        
        // Aqui você pode adicionar lógica para enviar o formulário
        // Por exemplo, usando fetch para uma API
        
        alert('Mensagem enviada com sucesso!');
        this.form.reset();
    }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new FormHandler();
});
