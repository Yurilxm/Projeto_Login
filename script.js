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



const toggle = document.getElementById('theme-toggle-checkbox');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    const checkbox = document.getElementById('theme-toggle-checkbox');
    checkbox.addEventListener('change', () => {
        body.classList.toggle('light', checkbox.checked);
        const isLight = body.classList.contains('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
    body.classList.toggle('light', savedTheme === 'light');
    checkbox.checked = savedTheme === 'light';
}


