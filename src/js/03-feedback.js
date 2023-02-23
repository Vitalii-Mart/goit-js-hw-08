













const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === `` || password.value === ``) {
    return alert("Всі поля повинні бути заповнені!");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);

  e.currentTarget.reset();
});