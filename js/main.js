const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
 
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

});

const reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
 

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },

});