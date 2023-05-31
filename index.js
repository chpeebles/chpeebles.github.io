// copyright year
const copyRightYear = document.getElementById('copyright-year');

copyRightYear.innerHTML = new Date().getFullYear();

// fade scroll
$(window).scroll(function () {
  $('.top').css('opacity', 1 - $(window).scrollTop() / 300);
});
