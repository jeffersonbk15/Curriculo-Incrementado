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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.querySelector('input[type="text"]').value;
    if (nome.length < 3) {
        alert('Nome precisa ter mais que 3 caracteres');
        return;
    }
    alert(`Obrigado, ${nome}! Mensagem simulada com sucesso.`);
});