(function ($, Drupal) {
  Drupal.behaviors.buttonToGallery = {
    attach: function (context, settings) {
      
        $(".project-info-2 > .views-field-nothing-1").once('buttonToGallery').click(function () {
          $([document.documentElement, document.body]).animate({
            scrollTop: $(".slide__content").offset().top
          }, 2000);
        });

        $(".views-field-nothing-2").once('buttonToGallery').click(function () {
          $([document.documentElement, document.body]).animate({
            scrollTop: $(".slick-list").offset().top -200
          }, 2000);
        });
      
    },
    detach: function (context, settings, trigger) {}
  };
})(jQuery, Drupal);
