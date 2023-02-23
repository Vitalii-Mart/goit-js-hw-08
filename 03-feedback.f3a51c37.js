document.querySelector(".login-form").addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:r,password:t}}=e.currentTarget;if(""===r.value||""===t.value)return alert("Всі поля повинні бути заповнені!");console.log(`Email: ${r.value}, Password: ${t.value}`),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.f3a51c37.js.map
