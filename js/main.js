$(document).ready(function () {
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

$('.newsletter').parallax({imageSrc: 'img/newsletter-bg.jpg'});

var menuButton = $(".menu-button");
menuButton.on("click", function () {
  $(".navbar-menu")
  .toggleClass("navbar-menu--visible");

});

var modalButton = $('[data-toggle=modal]');
modalButton.on("click", openModal);
function openModal() {
  var modal = $(".modal");
  modal.addClass("modal--visible");  
  };

var closeModalButton = $(".modal__close");
closeModalButton.on("click", closeModal);
function closeModal(event) {
  event.preventDefault();
  var modal = $(".modal");
  modal.removeClass("modal--visible");  
  };

$(document).keyup(function(e) {
	if (e.key === "Escape" || e.keyCode === 27) {
		e.preventDefault();
  var modal = $(".modal");
  modal.removeClass("modal--visible")
	}
});

});