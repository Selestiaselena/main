const reviewSwiper = new Swiper('.reviews-section__container.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        768: {
        slidesPerView: 2,
        },
        1280: {
        slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: '.carousel-button.next',
        prevEl: '.carousel-button.prev',
    },
});