(function ($, Drupal) {
  Drupal.behaviors.contactDropdown = {
    attach: function (context, settings) {
      $(document).ready(function () {
        function scrollFunction() {
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector('.path-frontpage .navbar .bootwood-logo').style.height = '60px';
          } else {
            document.querySelector('.path-frontpage .navbar .bootwood-logo').style.height = '80px';
          }
        }
        window.onload = function() {scrollFunction()};
        window.onscroll = function() {scrollFunction()};
      });
    },
    detach: function (context, settings, trigger) {}
  };
})(jQuery, Drupal);