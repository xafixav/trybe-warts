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
const getForm = document.getElementsByTagName('form')[1];

// login

function login() {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', login);

// mostra ou esconde o botao `enviar`

function showButton() {
  button.removeAttribute('disabled');
  button.classList.remove('isHidden');
  if (getAgreementValue.checked === false) {
    button.classList.add('isHidden');
    button.setAttribute('disabled', '');
  }
}

getAgreementValue.addEventListener('click', showButton);

// captura a nota de 1 a 10

function getTrybeWartsRate() {
  for (let i = 0; i < getInputRate.length; i += 1) {
    const check = getInputRate[i].checked;
    if (check === true) {
      getInputRateValue = document.getElementsByClassName('input-rate')[i].value;
    } else {
      getInputRateValue = 'Nos informe a Avaliação';
    }
  }
}

// captura a familia selecionada

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
  } else {
    getFamily = 'Selecione uma Família';
  }
}

// adiciona na let conteudos as licoes que quer aprender

function getHypeLessons() {
  const content2 = document.getElementById('content').querySelectorAll('input');
  for (let i = 0; i < content2.length; i += 1) {
    if (content2[i].checked === true) {
      conteudos += `${content2[i].value}, `;
    }
  }
}

// monta todas adiciona o conteudo em todas as lets que serao utilizadas

function createObjectList() {
  getTrybeWartsRate();
  getFamilySelected();
  getHypeLessons();
  getName = ` ${document.getElementById('input-name').value}`;
  getLastName = ` ${document.getElementById('input-lastname').value}`;
  getEmail = ` ${document.getElementById('input-email').value}`;
  getHouse = ` ${document.getElementById('house').value}`;
  getText = ` ${document.getElementById('textarea').value}`;
}

// cria a div onde ficara o resultado do formulario

function createDiv(event) {
  createObjectList();
  event.preventDefault();
  const box = document.createElement('div');
  box.setAttribute('class', 'end-form');
  getForm.appendChild(box);
  const form = [
    `Nome: ${getName} ${getLastName}
    Email: ${getEmail}
    Casa: ${getHouse}
    Família: ${getFamily}
    Matérias: ${conteudos}
    Avaliação: ${getInputRateValue}
    Observações: ${getText}`,
  ];
  box.innerText = form;
  conteudos = [];
}

// remove formularios extras, para evitar poluicao

function removeDiv() {
  const boxOld = document.getElementsByClassName('end-form');
  if (boxOld.length > 1) {
    boxOld[0].remove();
  }
}

button.addEventListener('click', createDiv, false);
button.addEventListener('click', removeDiv, false);

// contador de Caracteres:

const comments = document.getElementById('textarea');
const count = document.getElementById('counter');

function countChar() {
  const limit = 500;
  const typed = comments.value.length;
  const rest = limit - typed;
  const text = ' caracteres restantes';

  count.innerText = rest + text;
}

comments.addEventListener('keyup', countChar);

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
