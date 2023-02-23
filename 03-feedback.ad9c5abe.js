document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();var r=e.currentTarget.elements,t=r.email,a=r.password;if(""===t.value||""===a.value)return alert("Всі поля повинні бути заповнені!");console.log("Email: ".concat(t.value,", Password: ").concat(a.value)),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.ad9c5abe.js.map
