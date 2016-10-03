$(document).ready(function() {

  $('.tabs__panel:not(":first-of-type")').hide();
  $('<div class="line"></div>').appendTo('.tabs__item');
  $('.tabs__item:first-of-type').find(':first').width('100%');

  $('.tabs__item').each(function(index) {
    $(this).attr('data-tab', 'tab'+index);
  });

  $('.tabs__panel').each(function(index) {
    $(this).attr('data-tab', 'tab'+index);
  });

  $('.tabs__item').on('click', function() {

    var getData = $(this).data('tab');
    var getTabs = $(this).closest('.tabs');
    var line = $(this).find('.line');

    getTabs.find('.tabs__item').removeClass('tabs__item--active');
    $(this).addClass('tabs__item--active');

    getTabs.find('.line').width(0);
    line.animate({'width': '100%'}, 'fast');

    getTabs.find('.tabs__panel').hide();
    getTabs.find('.tabs__panel[data-tab='+getData+']').show();

  });
});