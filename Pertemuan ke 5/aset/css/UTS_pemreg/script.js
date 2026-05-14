// LOGIN
const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(event){

event.preventDefault();

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

document.getElementById("errorUsername").textContent = "";
document.getElementById("errorPassword").textContent = "";
document.getElementById("pesanLogin").textContent = "";

if(username === ""){

document.getElementById("errorUsername").textContent =
"Username wajib diisi";

}

else if(password === ""){

document.getElementById("errorPassword").textContent =
"Password wajib diisi";

}

else{

document.getElementById("pesanLogin").textContent =
"Login berhasil";

window.location.href = "dashboard.html";

}

});

}


// REGISTER
const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit", function(event){

event.preventDefault();

let nama =
document.getElementById("nama").value;

let email =
document.getElementById("email").value;

let regPassword =
document.getElementById("regPassword").value;

let confirmPassword =
document.getElementById("confirmPassword").value;

document.getElementById("errorNama").textContent = "";
document.getElementById("errorEmail").textContent = "";
document.getElementById("errorRegPassword").textContent = "";
document.getElementById("errorConfirm").textContent = "";

if(nama === ""){

document.getElementById("errorNama").textContent =
"Nama wajib diisi";

}

else if(email === ""){

document.getElementById("errorEmail").textContent =
"Email wajib diisi";

}

else if(regPassword.length < 8){

document.getElementById("errorRegPassword").textContent =
"Password minimal 8 karakter";

}

else if(regPassword !== confirmPassword){

document.getElementById("errorConfirm").textContent =
"Konfirmasi password tidak sama";

}

else{

document.getElementById("pesanRegister").textContent =
"Register berhasil";

}

});

}


// LUPA PASSWORD
const forgotForm =
document.getElementById("forgotForm");

if(forgotForm){

forgotForm.addEventListener("submit", function(event){

event.preventDefault();

let forgotEmail =
document.getElementById("forgotEmail").value;

document.getElementById("errorForgot").textContent = "";
document.getElementById("pesanReset").textContent = "";

if(forgotEmail === ""){

document.getElementById("errorForgot").textContent =
"Email wajib diisi";

}

else{

document.getElementById("pesanReset").textContent =
"Link reset password telah dikirim";

}

});

}


// LOGOUT
const logoutBtn =
document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.addEventListener("click", function(){

window.location.href = "login.html";

});

}