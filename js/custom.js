$(document).ready(function () {
$('.banner_sec_slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed:1100,
  fade: true,
  cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 1000,
  customPaging: function (slider, i) {
    let index = (i + 1).toString().padStart(2, '0'); // 01, 02, 03
    return `<button>${index}</button>`;
  }
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
});