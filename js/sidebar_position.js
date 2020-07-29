(function ($, Drupal) {
  Drupal.behaviors.filtersPosition = {
    attach: function (context, settings) {

      var fixed_pos = $('.region.region-sidebar-first').offset().top;

      $(window).on('load', function(){
        if (settings.responsive.active['bootwood.sm'] === true) {
          $('.region.region-sidebar-first').css('position', 'fixed');
          checkOffset(fixed_pos);
        }
      });
      $(document).scroll(function() {
        if (settings.responsive.active['bootwood.sm'] === true) {
          checkOffset(fixed_pos);
        } else {
          $('.region.region-sidebar-first').css('position', 'static');
        }
      });

      $('#filters-mobile-header').unbind().click(function(){
        $('#filters-mobile-header + form').toggle();
      });
      $(window).on('breakpointDeactivated', handleBreakpointDeactivated);
    },
    detach: function (context, settings, viewport, trigger) {}
  };

  function checkOffset(fixed_pos) {
    if($('.region.region-sidebar-first').offset().top + $('.region.region-sidebar-first').height() >= $('footer.footer').offset().top - 10) {
      $('.region.region-sidebar-first').css('position', 'absolute').addClass('stick-to-footer');
    }
    if($('.region.region-sidebar-first').offset().top - $(window).scrollTop() > fixed_pos) {
      $('.region.region-sidebar-first').css('position', 'fixed').removeClass('stick-to-footer');
    }
    $('region.region-sidebar-first').text($(document).scrollTop() + window.innerHeight);
  }

  var handleBreakpointDeactivated = function (e, breakpoint) {
    if (breakpoint === 'bootwood.sm') {
      $('.region.region-sidebar-first').css('position', 'static');
    }
  };


})(jQuery, Drupal);


