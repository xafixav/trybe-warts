const btnLogin = document.getElementById('button-login');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const getAgreementValue = document.getElementById('agreement');
const button = document.getElementById('submit-btn');
const getInputRate = document.getElementsByClassName('input-rate');
let getText = [];
let getInputRateValue;
let getFamily;
let conteudos = [];
let getName = [];
let getLastName = [];
let getEmail = [];
let getHouse = [];
const space = ' ';
const virgula = ',';
const stringName = 'Nome: ';
const stringEmail = 'Email: ';
const stringHouse = 'Casa: ';
const stringFamily = 'Família: ';
const stringContent = 'Matérias: ';
const stringAvaliation = 'Avaliação: ';
const stringObservation = 'Observações: ';
let form = {};

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

function getTrybeWartsRate() {
  for (let i = 0; i < getInputRate.length; i += 1) {
    const check = getInputRate[i].checked;
    if (check === true) {
      getInputRateValue = document.getElementsByClassName('input-rate')[i].value;
    }
  }
}

function getFamilySelected() {
  const getFrontEnd = document.getElementById('frontend').checked;
  const getBackEnd = document.getElementById('backend').checked;
  const getFullStack = document.getElementById('fullstack').checked;
  if (getFrontEnd === true) {
    getFamily = 'Frontend';
  } else if (getBackEnd === true) {
    getFamily = 'Backend';
  } else if (getFullStack === true) {
    getFamily = 'Fullstack';
  }
}

function getHypeLessons() {
  const content2 = document.getElementById('content').querySelectorAll('input');
  for (let i = 0; i < content2.length; i += 1) {
    if (content2[i].checked === true) {
      conteudos += content2[i].value + virgula + space;
    }
  }
}

function getFirstInput() {
}

function createObjectList() {
  getTrybeWartsRate();
  getFamilySelected();
  getHypeLessons();
  getFirstInput();
  getName = space + document.getElementById('input-name').value;
  getLastName = space + document.getElementById('input-lastname').value;
  getEmail = space + document.getElementById('input-email').value;
  getHouse = space + document.getElementById('house').value;
  getText = space + document.getElementById('textarea').value;
}

function createDiv(event) {
  createObjectList();
  event.preventDefault();
  const box = document.createElement('div');
  const getForm = document.getElementsByTagName('form')[1];
  getForm.appendChild(box);

  form = [
    stringName + getName + getLastName,
    stringEmail + getEmail + space,
    stringHouse + getHouse + space,
    stringFamily + getFamily + space,
    stringContent + conteudos + space,
    stringAvaliation + getInputRateValue + space,
    stringObservation + getText + space,
  ];
  box.innerText = form;
}

button.addEventListener('click', createDiv, false);

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
