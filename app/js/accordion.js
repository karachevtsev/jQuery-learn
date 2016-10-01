$(document).ready(function() {

  $('.panel > .panel__text').not(':first').hide();

  $('.panel__title').click(function(event) {

    var panelText = $(this).next('.panel__text');
    var panelGroup = $(this).closest('.panel-group');

    if (panelText.is(':visible')) {
      panelText.slideUp('fast');
    }
    else {
      panelGroup.find('.panel > .panel__text').slideUp('fast');
      panelText.slideDown('fast');
    }
    
  });

});