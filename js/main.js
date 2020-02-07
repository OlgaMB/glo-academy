const mySwiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.arrow'
      },
      loop: true,
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 540px
      540: {
        slidesPerView: 2
      }
    }
});

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
});