// const container = document.querySelector(".container");
// const registerBtn = document.querySelector(".register-btn");
// const loginBtn = document.querySelector(".login-btn");

// registerBtn.onclick = () => {
//   container.classList.add("active");
// };
// loginBtn.onclick = () => {
//   container.classList.remove("active");
// };

// // Register
// document.getElementById("registerForm").addEventListener("submit", function(e){
//   e.preventDefault();

//   let user = {
//     name: fullName.value,
//     email: email.value,
//     password: password.value,
//     contact: contact.value,
//     gender: gender.value
//   };

//   localStorage.setItem("userData", JSON.stringify(user));
//   regMsg.innerText = "Registration Successful!";
//   container.classList.remove("active");
// });

// // Login
// document.getElementById("loginForm").addEventListener("submit", function(e){
//   e.preventDefault();

//   let stored = JSON.parse(localStorage.getItem("userData"));
// if(!stored){
//   loginMsg.innerText = "No user registered!";
//   loginMsg.style.color="red";
//   return;
// }


//   if(loginEmail.value === stored.email && loginPassword.value === stored.password){
//     loginMsg.innerText = "Login Successful!";
//     setTimeout(()=>{
//       window.location.href = "project.html";
//     },1000);
//   }else{
//     loginMsg.innerText = "Invalid Login!";
//     loginMsg.style.color="red";
//   }
// });







// const loginForm = document.getElementById("loginForm");
// const registerForm = document.getElementById("registerForm");
// const loginMsg = document.getElementById("loginMsg");
// const regMsg = document.getElementById("regMsg");

// // Store user when registering
// registerForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.getElementById("fullName").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const contact = document.getElementById("contact").value;
//     const gender = document.getElementById("gender").value;

//     localStorage.setItem("userEmail", email);
//     localStorage.setItem("userPassword", password);

//     regMsg.style.color = "green";
//     regMsg.innerText = "Registration Successful! Please login.";
// });

// // Login & redirect
// loginForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const loginEmail = document.getElementById("loginEmail").value;
//     const loginPassword = document.getElementById("loginPassword").value;

//     const storedEmail = localStorage.getItem("userEmail");
//     const storedPassword = localStorage.getItem("userPassword");

//     if (loginEmail === storedEmail && loginPassword === storedPassword) {
//         loginMsg.style.color = "green";
//         loginMsg.innerText = "Login successful! Redirecting...";

//         // Redirect to project.html
//         setTimeout(() => {
//             window.location.href = "project.html";
//         }, 1000);

//     } else {
//         loginMsg.style.color = "red";
//         loginMsg.innerText = "Invalid Email or Password";
//     }
// });












// Toggle Login & Register
const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.onclick = () => container.classList.add("active");
loginBtn.onclick = () => container.classList.remove("active");

// Get elements
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const regMsg = document.getElementById("regMsg");
const loginMsg = document.getElementById("loginMsg");

// ================= REGISTER =================
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = {
        name: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        contact: document.getElementById("contact").value,
        gender: document.getElementById("gender").value
    };

    localStorage.setItem("userData", JSON.stringify(user));

    regMsg.style.color = "green";
    regMsg.innerText = "Registration Successful! Please Login.";

    container.classList.remove("active");
});

// ================= LOGIN =================
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const stored = JSON.parse(localStorage.getItem("userData"));

    if (!stored) {
        loginMsg.style.color = "red";
        loginMsg.innerText = "No user registered!";
        return;
    }

    if (loginEmail === stored.email && loginPassword === stored.password) {
        loginMsg.style.color = "green";
        loginMsg.innerText = "Login Successful! Redirecting...";

        setTimeout(() => {
            window.location.href = "project.html";   // ✅ Redirect here
        }, 1000);
    } else {
        loginMsg.style.color = "red";
        loginMsg.innerText = "Invalid Email or Password!";
    }
});
