(function ($, Drupal) {
  Drupal.behaviors.languageSelect = {
    attach: function (context, settings) {

      //Toggle language switcher blocs visibility
      $('.navbar-header .navbar-toggle').click(function () {


        if($(this).attr('aria-expanded') === "false" || $(this).attr('aria-expanded') === undefined) {
          $('.navbar-header .region-navigation .dropdown-language-item').show();
          $('#block-dropdownlanguageselector').hide();
        } else {
          $('.navbar-header .region-navigation .dropdown-language-item').hide();
          $('#block-dropdownlanguageselector').show();
        }
      });

        $('.navbar-header', context).once('myBehvr').each(function() {
            var header = $('.navbar-header');
            var language = $('.block-dropdown-language').html();
            header.append(language);
        });
    },
    detach: function (context, settings, trigger) {}
  };
})(jQuery, Drupal);
