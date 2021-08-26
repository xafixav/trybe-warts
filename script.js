const btnLogin = document.getElementById('button-login');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const getAgreementValue = document.getElementById('agreement');
const button = document.getElementById('submit-btn');

function login() {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', login);

function showButton() {
  button.removeAttribute('disabled');
  button.classList.remove('isHidden');
  if (getAgreementValue.checked === false) {
    button.classList.add('isHidden');
  }
}

getAgreementValue.addEventListener('click', showButton);

// contador

const comments = document.getElementById('textarea');
const count = document.getElementById('counter');

function countChar() {
  const limit = 500;
  const typed = comments.value.length;
  const rest = limit - typed;
  const text = ' caracteres restantes';

  count.innerText = rest + text;
}

comments.addEventListener('input', countChar);
