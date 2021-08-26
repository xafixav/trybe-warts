const btnLogin = document.getElementById('button-login');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const getAgreementValue = document.getElementById('agreement').value;
const getAgreementSection = document.getElementById('label-agreement');

function login() {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', login);

function createButton() {
  const button = document.createElement('button');
  button.setAttribute('id', 'submit-btn');
  button.innerText += 'Enviar';
  getAgreementSection.appendChild(button);
}

if (getAgreementValue === 'yes') {
  createButton();
}
