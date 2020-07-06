'use strict';

/*--------------------Datos Formulario--------------- */

//Objeto para crear los datos del formulario
const formData = {
  photo: '',
};

//Objeto que tiene todas las clases de la card para poder pintarlas
const cardFields = {
  palette: document.querySelector('.js-check:checked').value,
  name: document.querySelector('.js-text-name'),
  job: document.querySelector('.js-text-job'),
  email: document.querySelector('.js-mail'),
  phone: document.querySelector('.js-number'),
  linkedin: document.querySelector('.js-linkedin'),
  github: document.querySelector('.js-github'),
};

//Variables con input del form
const inputName = document.querySelector('.js-input-name');
const inputJob = document.querySelector('.js-input-job');
const inputEmail = document.querySelector('.js-input-mail');
const inputPhone = document.querySelector('.js-input-phone');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');
const formButton = document.querySelector('.js-share'); //Variable boton del form
const textShare = document.querySelector('.js-textShare'); //Variable del texto oculto de compartir

//Funcion que guarda los datos en el objeto y lo pinta en la tarjeta el texto
function setData(ev) {
  /* const name = ev.currentTarget.name;
  const inputValue = ev.currentTarget.value;

  formData[name] = inputValue;
  cardFields[name].innerHTML = inputValue; */
  if (inputName === ev.currentTarget) {
    cardFields.name.innerHTML = inputName.value;
    if (inputName.value === '') {
      cardFields.name.innerHTML = 'Nombre Apellido';
    }
  } else if (inputJob === ev.currentTarget) {
    cardFields.job.innerHTML = inputJob.value;
    if (inputJob.value === '') {
      cardFields.job.innerHTML = 'Front-end developer';
    }
  }
}

//Funcion que guarda los datos en el objeto y añade los links
function changeLinks(ev) {
  const name = ev.currentTarget.name;
  const inputValue = ev.currentTarget.value;

  formData[name] = inputValue;
  cardFields[name].href = ev.currentTarget.value;
}

console.log(formData);

//Funcion que valida los datos
function validation(ev) {
  ev.preventDefault();

  if (
    inputName.value.length > 1 &&
    inputJob.value.length > 1 &&
    inputEmail.value.length > 1 &&
    inputPhone.value.length > 1 &&
    inputLinkedin.value.length > 1 &&
    inputGithub.value.length > 1
  ) {
    textShare.classList.remove('hidden');
    formButton.classList.add('disabled');
  } else {
    alert('No has introducido ningún dato');
  }
}

//Listeners
inputName.addEventListener('keyup', setData);
inputJob.addEventListener('keyup', setData);
inputEmail.addEventListener('keyup', changeLinks);
inputPhone.addEventListener('keyup', changeLinks);
inputLinkedin.addEventListener('keyup', changeLinks);
inputGithub.addEventListener('keyup', changeLinks);
formButton.addEventListener('click', validation);