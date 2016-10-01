$(document).ready(function() {

  $('.menu__toggle').click(function(event) {
    console.log("clock");
    $('.menu__list').slideToggle(400);
    return false;
  });

  $(window).resize(function(event) {
    if ($(window).width() > 500) {
      $('.menu__list').removeAttr('style');
    }
  });

});