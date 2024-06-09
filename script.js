document.addEventListener('DOMContentLoaded', () => {
    
    const slider = document.getElementById('slider');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let scrollAmount = 0; 
    const slideStep = slider.children[0].clientWidth + 60; 
    prev.addEventListener('click', () => {
        scrollAmount -= slideStep;
        if (scrollAmount < 0) {
            scrollAmount = slider.scrollWidth - slider.clientWidth; 
            slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: -slideStep, behavior: 'smooth' });
        }
    });

    next.addEventListener('click', () => {
        scrollAmount += slideStep;
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
            scrollAmount = 0; // Về đầu
            slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: slideStep, behavior: 'smooth' });
        }
    });

        document.querySelectorAll('.image-item').forEach(container => {
            const video = container.querySelector('.video');

            container.addEventListener('mouseenter', () => {
                if (video) {
                    video.play();
                }
            });

            container.addEventListener('mouseleave', () => {
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            });
        });
    });

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
                window.location.reload(); // Làm mới trang sau khi đăng xuất
            });
        
            // them the div vào trong user-info-container
            const userInfoContainer = document.getElementById('user-info-container');
            userInfoContainer.innerHTML = ''; 
            userInfoContainer.appendChild(userInfoDiv);
        
            // hien thi user container
            userInfoContainer.style.display = 'block';
        }
        
    });

    document.addEventListener('DOMContentLoaded', () => {
    
        const trending = document.getElementById('trending');
        const prev = document.getElementById('prevt');
        const next = document.getElementById('nextt');
        let scrollAmount = 0; 
        const slideStep = trending.children[0].clientWidth + 48; 
        prev.addEventListener('click', () => {
            scrollAmount -= slideStep;
            if (scrollAmount < 0) {
                scrollAmount = trending.scrollWidth - trending.clientWidth; 
                trending.scrollTo({ left: scrollAmount, behavior: 'smooth' });
            } else {
                trending.scrollBy({ left: -slideStep, behavior: 'smooth' });
            }
        });

        next.addEventListener('click', () => {
            scrollAmount += slideStep;
            if (scrollAmount >= trending.scrollWidth - trending.clientWidth) {
                scrollAmount = 0; // Về đầu
                trending.scrollTo({ left: scrollAmount, behavior: 'smooth' });
            } else {
                trending.scrollBy({ left: slideStep, behavior: 'smooth' });
            }
        });

    });




    
    