$(document).ready(function () {
  $('.header__content-slider').slick({
    dots: true,
    arrows: false,
  })

  $('.quote-slider').slick({
    arrows: true,
    appendArrows: $('.quote__slider-arrows'),
    prevArrow:
      '<div class="quote__slider-arrow quote__slider-arrow-left"></div>',
    nextArrow:
      '<div class="quote__slider-arrow quote__slider-arrow-right"></div>',
    slidesToShow: 1,
    dots: true,
    appendDots: $('.quote__slider-dots'),
    fade: true,
  })
})

function ibg() {
  let ibg = document.querySelectorAll('._ibg')
  for (let i = 0; i < ibg.length; i++) {
    if (
      ibg[i].querySelector('img') &&
      ibg[i].querySelector('img').getAttribute('src') != null
    ) {
      ibg[i].style.backgroundImage =
        'url(' + ibg[i].querySelector('img').getAttribute('src') + ')'
    }
  }
}
ibg()
