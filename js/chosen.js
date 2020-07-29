(function ($, Drupal) {
  Drupal.behaviors.select2 = {
    attach: function (context, settings) {
      $(".chosen").select2();
      $('.select2 span').addClass('needsclick')
      // Chosen touch support.
      if ($('.chosen-container').length > 0) {
        $('.chosen-container').on('touchstart', function(e){
          e.stopPropagation(); e.preventDefault();
          // Trigger the mousedown event.
          $(this).trigger('mousedown');
        });
      }
    },
    detach: function (context, settings, trigger) {}
  }
})(jQuery, Drupal);