document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('loginBtn');
    const registerButton = document.getElementById('registerBtn');
    const loggedInUser = JSON.parse(localStorage.getItem('userLogin'));

    if (loggedInUser) {
        // nguoi dung dang nhap thanh cong, an cac nut dang nhap va dang ki
        loginButton.classList.add('hidden');
        registerButton.classList.add('hidden');

        // hien thi thong tin nguoi dung da dang nhap
        showLoggedInUserInfo(loggedInUser);
    } else {
        // neu chua dang nhap, hien thi lai nut dang nhap va dang ki
        loginButton.classList.remove('hidden');
        registerButton.classList.remove('hidden');
        // an thong tin nguoi dung neu co
        const userInfoContainer = document.getElementById('user-info-container');
        userInfoContainer.classList.add('hidden');
    }  
});
