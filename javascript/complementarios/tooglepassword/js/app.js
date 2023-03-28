const passwordToggle = document.querySelector('.password-toggle');
const password = document.querySelector('#password');

passwordToggle.addEventListener('click', function() {
  if (password.type === 'password') {
    password.type = 'text';
    passwordToggle.classList.add('active');
  } else {
    password.type = 'password';
    passwordToggle.classList.remove('active');
  }
});