const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  loop: true,

  breakpoints : {
    320: {
      slidesPerView: 1,
    },

    840: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

  },

  pagination: {
    el: '.swiper-pagination',
  },

});