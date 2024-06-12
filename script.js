function redirectToLogin(userType) {
    window.location.href = `login.html?user=${userType}`;
}

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

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const name = document.getElementById('name').value;
            const password = document.getElementById('password').value

            if (name === 'cauadezidera' && password === 'cauadezidera1') {
                alert('Login bem-sucedido!');
                
                window.location.href = 'profile.html';
            } else {
                alert('Nome ou senha incorretos.');
            }
        });
    }

    const toggleInterest = (button) => {
        button.classList.toggle('selected');
    };

    const interestButtons = document.querySelectorAll('.interest');
    interestButtons.forEach(button => {
        button.addEventListener('click', function() {
            toggleInterest(button);
        });
    });
});
