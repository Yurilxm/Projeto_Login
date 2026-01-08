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



