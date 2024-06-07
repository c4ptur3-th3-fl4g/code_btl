document.addEventListener('DOMContentLoaded', () => {
    
    const slider = document.getElementById('slider');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let scrollAmount = 0; 
    const slideStep = slider.children[0].clientWidth + 9.5; 
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

