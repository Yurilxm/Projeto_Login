const input = document.getElementById('password');
const toggleButton = document.getElementById('togglePassword');

toggleButton.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';

    toggleButton.className = isPassword
    ? 'ri-eye-fill toggle-password'
    : 'ri-eye-off-fill toggle-password';

    toggleButton.classList.toggle('active', isPassword);
});



const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Carrega tema salvo
if (localStorage.getItem('theme') === 'light') {
body.classList.add('light');
toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
body.classList.toggle('light');

const isLight = body.classList.contains('light');
toggle.textContent = isLight ? '☀️' : '🌙';
localStorage.setItem('theme', isLight ? 'light' : 'dark');
});


