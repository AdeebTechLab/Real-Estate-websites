let eyeIcon = document.querySelector('.eye-icon');
let passwordInput = document.querySelector('.password');

eyeIcon.addEventListener('click', () => {
    if (passwordInput.type == 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
})