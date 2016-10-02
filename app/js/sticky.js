$(document).ready(function() {

  var menuPosition;
  var windowPosition;
  var menuHeight;
  var menu = $('.menu');
  var content = $('.content');

  function refreshPosition() {
    menuPosition = menu.offset().top;
    menuHeight = menu.outerHeight(true);
  }

  refreshPosition();

  $(window).resize(refreshPosition);

  $(window).scroll(function(event) {
    windowPosition = $(window).scrollTop();

    if (windowPosition >= menuPosition) {
      menu.addClass('menu--fixed');
      content.css('padding-top', menuHeight*2);
    }

    else {
      menu.removeClass('menu--fixed');
      content.css('padding-top', 0);
    }
  });

});