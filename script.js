// Função para redirecionar para a página de login com o parâmetro apropriado
function redirectToLogin(userType) {
    window.location.href = `login.html?user=${userType}`;
}

// Adiciona event listeners aos botões da página inicial
document.addEventListener('DOMContentLoaded', function() {
    const professorButton = document.getElementById('professor-button');
    const alunoButton = document.getElementById('aluno-button');

    if (professorButton && alunoButton) {
        professorButton.addEventListener('click', function() {
            redirectToLogin('professor');
        });

        alunoButton.addEventListener('click', function() {
            redirectToLogin('aluno');
        });
    }

    // Personaliza a saudação na página de login com base no parâmetro da URL
    const urlParams = new URLSearchParams(window.location.search);
    const userType = urlParams.get('user');
    const greetingElement = document.getElementById('greeting');

    if (greetingElement) {
        if (userType === 'professor') {
            greetingElement.textContent = 'Olá, professor!';
        } else if (userType === 'aluno') {
            greetingElement.textContent = 'Olá, aluno!';
        }
    }

    // Adiciona event listener ao formulário de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio do formulário

            // Pegue os valores dos campos de entrada
            const name = document.getElementById('name').value;
            const password = document.getElementById('password').value;

            // Simula a lógica de autenticação
            if (name === 'user' && password === 'password') {
                alert('Login bem-sucedido!');
                // Redireciona para a página de perfil
                window.location.href = 'profile.html';
            } else {
                alert('Nome ou senha incorretos.');
            }
        });
    }

    // Função para alternar a seleção de interesses
    const toggleInterest = (button) => {
        button.classList.toggle('selected');
    };

    // Adiciona event listeners aos botões de interesses
    const interestButtons = document.querySelectorAll('.interest');
    interestButtons.forEach(button => {
        button.addEventListener('click', function() {
            toggleInterest(button);
        });
    });
});
