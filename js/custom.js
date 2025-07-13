$(document).ready(function () {
  $('.banner_sec_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1200,
    fade: true,
    cssEase: 'linear',
    autoplay:true,
    autoplaySpeed: 3000,
    customPaging: function (slider, i) {
      if (window.innerWidth > 991) {
        let index = (i + 1).toString().padStart(2, '0');
        return `<button>${index}</button>`;
      }
      return `<button></button>`; 
    },
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
          arrows: false

        }
      }
    ]
  });



$(document).ready(function () {
  $('.banner_text_block').removeClass('animate-in');
  $('.slick-slide.slick-current .banner_text_block').addClass('animate-in');
});

$('.banner_sec_slider').on('beforeChange', function () {
  $('.banner_text_block').removeClass('animate-in');
});

$('.banner_sec_slider').on('afterChange', function(event, slick, currentSlide){
  $('.slick-slide').eq(currentSlide).find('.banner_text_block').addClass('animate-in');
});

// Open popup
$('#search-btn').on('click', function () {
  $('body').addClass('open-popup');
});

$('.close_icon').on('click', function () {
  $('body').removeClass('open-popup');
});

$('.search-gi').on('click', function (e) {
  if (!$(e.target).closest('.search-popup-box').length) {
    $('body').removeClass('open-popup');
  }
});

$('.menu_hamburger, .site-header__menu-toggle').on('click', function () {
  $('body').addClass('menu-open');
  $('.overlay').fadeIn(100);
  $('.side-menu').animate({ right: '0' }, 100, 'swing');
});

  $('.close-menu, .overlay').on('click', function () {
    $('.side-menu').animate({ right: '-600px' }, 100, 'swing', function () {
      $('body').removeClass('menu-open');
      $('.overlay').fadeOut(100);
    });
  });

});