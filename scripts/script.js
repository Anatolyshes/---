function toInfo() {
    let info = document.getElementById("info");
    info.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
// Слайдер
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Слайдер