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
// паралакс
  $('.newsletter').parallax({imageSrc: 'img/newsletter-bg.jpg'});

  // кнопка меню
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-menu")
    .toggleClass("navbar-menu--visible");

  });

  // модальное окно
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

    // подключение валидации
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          minlength: "Your name must be at least 2 letters",
          required: "We need your name to contact you",
          name: "Please specify your name",          
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          minlength: "Please enter your full phone number",
          required: "We need your phone to contact you",
          phone: "Your phone number must be in format of +7-XXX-XX-XX",  
        },
      },
    });
  });
  $(".newsletter__subscribe").validate({
      errorClass: "invalid",
      messages: {        
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },       
      },
  });
  // маска для номера телефона
 
   var SPMaskBehavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '+7 (000) 000-0000' : '+7 (000) 000-0009';
},
spOptions = {
  onKeyPress: function(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
};

$('.phone').mask(SPMaskBehavior, spOptions);
   
  // инициализация библиотеки анимации
  AOS.init();
});

