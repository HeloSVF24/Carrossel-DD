document.addEventListener('DOMContentLoaded', () => {
    let index = 0;

    const inner = document.querySelector('.carrossel-inner');
    const totalSlides = document.querySelectorAll('.carrossel-inner img').length;

    function mudarSlide() {
        index++;
        if (index >= totalSlides) {
            index = 0;
        }
        inner.style.transform = `translateX(-${index * 100}%)`;
    }

    // Troca automática a cada 5 segundos
    setInterval(mudarSlide, 2000);
});
