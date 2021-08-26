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

// temas

const house = document.getElementById('house');
const header = document.getElementById('header');
const title = document.getElementById('trybewarts-header-title');

function applyTheme() {
  if (house.value === 'Gitnória') {
    header.style.backgroundColor = 'rgb(233, 84, 32)';
    title.style.color = 'rgb(51, 51, 51)';
    btnLogin.style.backgroundColor = 'rgb(51, 51, 51)';
    button.style.backgroundColor = 'rgb(51, 51, 51)';
  } else if (house.value === 'Reactpuff') {
    header.style.backgroundColor = 'rgb(94, 141, 210)';
    title.style.color = 'rgb(58, 221, 255)';
    btnLogin.style.backgroundColor = 'rgb(58, 221, 255)';
    button.style.backgroundColor = 'rgb(58, 221, 255)';
  } else if (house.value === 'Corvinode') {
    header.style.backgroundColor = 'rgb(44, 160, 89)';
    title.style.color = 'rgb(85, 34, 0)';
    btnLogin.style.backgroundColor = 'rgb(85, 34, 0)';
    button.style.backgroundColor = 'rgb(85, 34, 0)';
  } else if (house.value === 'Pytherina') {
    header.style.backgroundColor = 'rgb(255, 221, 85)';
    title.style.color = 'rgb(42, 127, 255)';
    btnLogin.style.backgroundColor = 'rgb(42, 127, 255)';
    button.style.backgroundColor = 'rgb(42, 127, 255)';
  } else {
    header.style.backgroundColor = 'rgb(50, 167, 145)';
    title.style.color = 'white';
    btnLogin.style.backgroundColor = 'darkslateblue';
    button.style.backgroundColor = 'darkslateblue';
  }
}

house.addEventListener('change', applyTheme);
