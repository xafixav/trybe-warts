const btnLogin = document.getElementById('button-login');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const getAgreementValue = document.getElementById('agreement');
const button = document.getElementById('submit-btn');
const getInputRate = document.getElementsByClassName('input-rate');
const getFooter = document.getElementsByTagName('footer')[0];
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

// temas

const house = document.getElementById('house');
const header = document.getElementById('header');
const title = document.getElementById('trybewarts-header-title');

function applyGit() {
  header.style.backgroundColor = 'rgb(233, 84, 32)';
  const colorGit = 'rgb(51, 51, 51)';
  title.style.color = colorGit;
  btnLogin.style.backgroundColor = colorGit;
  button.style.backgroundColor = colorGit;
  getFooter.style.backgroundColor = colorGit;
}

function applyReactPuff() {
  header.style.backgroundColor = 'rgb(94, 141, 210)';
  const colorReact = 'rgb(58, 221, 255)';
  title.style.color = colorReact;
  btnLogin.style.backgroundColor = colorReact;
  button.style.backgroundColor = colorReact;
  getFooter.style.backgroundColor = colorReact;
}

function applyCorvinode() {
  header.style.backgroundColor = 'rgb(44, 160, 89)';
  const colorCorvi = 'rgb(85, 34, 0)';
  title.style.color = colorCorvi;
  btnLogin.style.backgroundColor = colorCorvi;
  button.style.backgroundColor = colorCorvi;
  getFooter.style.backgroundColor = colorCorvi;
}

function applyPytherina() {
  header.style.backgroundColor = 'rgb(255, 221, 85)';
  const colorPytherina = 'rgb(42, 127, 255)';
  title.style.color = colorPytherina;
  btnLogin.style.backgroundColor = colorPytherina;
  button.style.backgroundColor = colorPytherina;
  getFooter.style.backgroundColor = colorPytherina;
}

function restoreOriginal() {
  header.style.backgroundColor = 'rgb(50, 167, 145)';
  title.style.color = 'white';
  const defaultColor = 'darkslateblue';
  btnLogin.style.backgroundColor = defaultColor;
  button.style.backgroundColor = defaultColor;
  getFooter.style.backgroundColor = 'rgb(95, 99, 134)';
}
function applyTheme() {
  if (house.value === 'Gitnória') {
    applyGit();
  } else if (house.value === 'Reactpuff') {
    applyReactPuff();
  } else if (house.value === 'Corvinode') {
    applyCorvinode();
  } else if (house.value === 'Pytherina') {
    applyPytherina();
  } else {
    restoreOriginal();
  }
}

house.addEventListener('change', applyTheme);
