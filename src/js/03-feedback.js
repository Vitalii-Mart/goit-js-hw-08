import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    input: document.querySelector('input'),
};


refs.form.addEventListener('input', qwe)


function qwe(evt) {
    const mes = evt.currentTarget.value;

    localStorage.setItem('asd', mes);
}













// const formEl = document.querySelector(".login-form");

// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const {
//     elements: { email, password },
//   } = e.currentTarget;
//   if (email.value === `` || password.value === ``) {
//     return alert("Всі поля повинні бути заповнені!");
//   }
//   console.log(`Email: ${email.value}, Password: ${password.value}`);

//   e.currentTarget.reset();
// });