window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.sobre-lugar, .que-hacer, .galeria-imagen, .ubicacion');
    
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            
            if (isVisible && !section.classList.contains('visible')) {
                section.classList.add('visible');
            }
        });
    }
    checkVisibility();
    
    window.addEventListener('scroll', checkVisibility);
});

// Smooth scroll
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Scroll indicator
    const scrollIndicador = document.querySelector('.scroll-indicador');
    if (scrollIndicador) {
        window.addEventListener('scroll', () => {
            scrollIndicador.style.opacity = window.scrollY > 100 ? '0' : '1';
        });
    }
});