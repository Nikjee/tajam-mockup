$(document).ready(function () {
  $('.header__content-slider').slick({
    dots: true,
    arrows: false,
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
