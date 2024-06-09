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
    function showLoggedInUserInfo(findUser) {
        const userInfoDiv = document.createElement('div');
        userInfoDiv.classList.add('user-info-details');
        userInfoDiv.innerHTML = `
            <p>Xin chào, <strong>${findUser.userName}</strong>!</p>
            <button id="logoutButton">Đăng xuất</button>
        `;
    
        // Them su kien cho nut dang xuat
        userInfoDiv.querySelector('#logoutButton').addEventListener('click', function() {
            localStorage.removeItem('userLogin');
            window.location.reload(); 
        });
    
        // them the div vào trong user-info-container
        const userInfoContainer = document.getElementById('user-info-container');
        userInfoContainer.innerHTML = ''; 
        userInfoContainer.appendChild(userInfoDiv);
    
        // hien thi user container
        userInfoContainer.classList.remove('hidden');
    }
    
});
