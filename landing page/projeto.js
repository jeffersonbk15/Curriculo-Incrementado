// Modo Escuro
const botaoModo = document.getElementById('modoEscuro');
botaoModo.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Formulário
const form = document.getElementById('meuForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada (simulação)!');
    form.reset();
});