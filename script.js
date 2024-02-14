document.addEventListener('DOMContentLoaded', function () {
    // Agregar imágenes al carrusel
    const carouselData = [
        { imageSrc: '/images/square.png', text: 'cuadro pop it', buttonText: 'comprar' },
        { imageSrc: '/images/amongus.png', text: 'Among pop it', buttonText: 'comprar' },
        { imageSrc: '/images/round.png', text: 'circulo pop it', buttonText: 'comprar' },
        // Agrega más datos según sea necesario
    ];

    const carouselContainer = document.querySelector('.swiper-wrapper');
    carouselData.forEach(data => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        const image = document.createElement('img');
        image.src = data.imageSrc;
        image.alt = 'Carousel Image';

        const text = document.createElement('p');
        text.textContent = data.text;

        const button = document.createElement('button');
        button.textContent = data.buttonText;

        slide.appendChild(image);
        slide.appendChild(text);
        slide.appendChild(button);

        carouselContainer.appendChild(slide);
    });

    // Inicializar el carrusel con Swiper.js
    const mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
