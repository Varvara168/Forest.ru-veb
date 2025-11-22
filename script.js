// Простой скрипт для навигации и слайдера
document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка к якорям
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Кнопка "Наверх"
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Простой слайдер
    const sliderItems = document.querySelectorAll('.slider-item');
    if (sliderItems.length > 1) {
        let currentSlide = 0;
        
        function showSlide(index) {
            sliderItems.forEach((item, i) => {
                item.style.display = i === index ? 'block' : 'none';
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % sliderItems.length;
            showSlide(currentSlide);
        }
        
        // Показываем первый слайд
        showSlide(currentSlide);
        
        // Автопереключение слайдов каждые 5 секунд
        setInterval(nextSlide, 5000);
    }
});