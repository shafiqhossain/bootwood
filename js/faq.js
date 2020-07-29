(function ($, Drupal) {
  Drupal.behaviors.contactDropdown = {
    attach: function (context, settings) {
      $(document).ready(function() {
        var headerLink = $(".faq-link");
        $(headerLink).click(function() {
          window.location = $(this).attr('href');
          return false;
        });
      });
    },
    detach: function(context, settings, trigger) {}
  }
})(jQuery, Drupal);