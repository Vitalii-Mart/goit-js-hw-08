import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const formEl = document.querySelector('.feedback-form');
const inputEL = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
populateInput();

formEl.addEventListener('input', throttle(onImput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
}

function onImput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInput() {
  const saveInput = localStorage.getItem(STORAGE_KEY);

  console.log(localStorage.getItem(STORAGE_KEY));
  if (saveInput) {
    const objName = JSON.parse(saveInput);

    if (objName.email !== undefined) inputEL.value = objName.email;
    if (objName.message !== undefined) textareaEl.value = objName.message;
  }
}
