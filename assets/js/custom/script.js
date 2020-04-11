var swiper = new Swiper('.category-swiper-container', {
    slidesPerView: 6,
    spaceBetween: 12,
    freeMode: true,
    breakpoints: {
        1366: {
            slidesPerView: 6,
        },
        768: {
            slidesPerView: 4,
        },
        710: {
            slidesPerView: 3,
        },
        550: {
            slidesPerView: 2,
        },
        420: {
            slidesPerView: 1,
            freeMode: false,
        },
    }
});

