(function ($, Drupal) {
  Drupal.behaviors.contactDropdown = {
    attach: function (context, settings) {
      var isopen;
      $("h3").one().on('click touch tap', function() {
        var content = $(this).next().get(0);
        if ($(content).hasClass('open') && isopen) {
          $(content).removeClass('open');
          $(this).removeClass('open');
          isopen = false;
          preventDefault();
        } else {
          $(content).addClass('open');
          $(this).addClass('open');
          isopen = true;
          preventDefault();
        }
      });
    },
    detach: function(context, settings, trigger) {}
  }
})(jQuery, Drupal);