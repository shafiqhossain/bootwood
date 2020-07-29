// This function makes custom arrows work with homepage slider

(function ($, Drupal) {
    Drupal.behaviors.addArrows = {
        attach: function (context, settings) {
            $('.view-slider-homepage', context).once('myBehvr').each(function() {
                $('.slick-prev').click(function(){
                    $('.slick__slider').slick('slickPrev');
                });

                $('.slick-next').click(function(){
                    $('.slick__slider').slick('slickNext');
                });
            });
        },
        detach: function (context, settings, trigger) {}
    };
})(jQuery, Drupal);