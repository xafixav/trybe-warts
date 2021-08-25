const btnLogin = document.getElementById('button-login');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

btnLogin.addEventListener('click', function(){
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert ('Olá, Tryber!');
  } else {
    alert ('Email ou senha inválidos.');
  }
});