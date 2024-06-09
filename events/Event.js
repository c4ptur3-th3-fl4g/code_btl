document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('loginBtn');
    const registerButton = document.getElementById('registerBtn');
    const loggedInUser = JSON.parse(localStorage.getItem('userLogin'));

    if (loggedInUser) {
        // nguoi dung dang nhap thanh cong, an cac nut dang nhap va dang ki
        loginButton.style.display = 'none';
        registerButton.style.display = 'none';

        // hien thi thong tin nguoi dung da dang nhap
        showLoggedInUserInfo(loggedInUser);
    } else {
        // neu chua dang nhap, hien thi lai nut dang nhap va dang ki
        loginButton.style.display = 'block';
        registerButton.style.display = 'block';

        // an thong tin nguoi dung neu co
        const userInfoContainer = document.getElementById('user-info-container');
        userInfoContainer.style.display = 'none';
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
        userInfoContainer.style.display = 'block';
    }
    
});
