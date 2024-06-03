// lay ra element cua trang

const formRegister = document.getElementById("formRegister");
const userNameElement = document.getElementById("userName");
const emailElement = document.getElementById("email");
const contactElement = document.getElementById("contact");
const passwordElement = document.getElementById("password");
const rePasswordElement = document.getElementById("rePassword");

// Lay du lieu tu local storage
const userLocal = JSON.parse(localStorage.getItem("users")) || [];

function togglePasswords() {
    var passwordField = document.getElementById("password");
    var rePasswordField = document.getElementById("rePassword");
    var showPasswordCheckbox = document.getElementById("showPassword");
    if (showPasswordCheckbox.checked) {
        passwordField.type = "text";
        rePasswordField.type = "text";
    } else {
        passwordField.type = "password";
        rePasswordField.type = "password";
    }
}
formRegister.addEventListener("submit", function(e){
    e.preventDefault();

    if (!userNameElement.value) {
        alert("Tên không được để trống");
    }

    if (passwordElement.value !== rePasswordElement.value){
        alert("Mật khẩu không trùng khớp");
    }
    if (userNameElement.value && 
        emailElement.value && 
        contactElement.value && 
        passwordElement.value && rePasswordElement.value 
        &&passwordElement.value === rePasswordElement.value){
        const user  = {
            userId: Math.ceil(Math.random() * 1000000000),
            userName: userNameElement.value,
            email: emailElement.value,
            password: passwordElement
        };
        // Day user vao mang
        userLocal.push(user);

        //luu tru len local
        localStorage.setItem("users", JSON.stringify(userLocal));

        //chuyen huong ve log in
        setTimeout(function(){
            window.location.href = "login.html";
        }, 1500);
    }
}); 

