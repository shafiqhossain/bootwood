(function ($, Drupal) {
  Drupal.behaviors.cartReload = {
    attach: function (context, settings) {
      $(document).one().on('click touch tap', function() {
        location.reload(true);
        // $('.view-sample').once().triggerHandler("RefreshView");
        // e.stopPropagation();
        // e.preventDefault();
      });
    },
    detach: function (context, settings, trigger) {}
  }
})(jQuery, Drupal);