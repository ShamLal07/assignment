$(document).ready(function () {
  $('.banner_sec_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    fade: true,
    cssEase: 'linear',
    autoplaySpeed: 1000,
    customPaging: function (slider, i) {
      if (window.innerWidth > 991) {
        let index = (i + 1).toString().padStart(2, '0');
        return `<button>${index}</button>`;
      }
      return `<button></button>`; // default dot on mobile
    },
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
          arrows: false
          // customPaging won't be triggered here due to default <button>
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

$('.search-popup').on('click', function (e) {
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