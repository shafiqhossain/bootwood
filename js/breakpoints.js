(function ($, Drupal) {
  Drupal.behaviors.breakpoints = {
    attach: function (context, settings) {

      var breakpoints = settings.responsive.breakpoints;

      var handleWindowLoad = function () {
        Object.keys(breakpoints).forEach(function (bp) {
          if (window.matchMedia(breakpoints[bp]).matches) {
            settings.responsive.active[bp] = true;
            $.event.trigger('breakpointActivated', bp);
          }
          else {
            settings.responsive.active[bp] = false;
          }
        });
      };

      var handleResize = function () {
        Object.keys(breakpoints).forEach(function (bp) {
          if (window.matchMedia(breakpoints[bp]).matches) {
            // if it wasn't already active, mark it as active
            if (settings.responsive.active[bp] !== true) {
              settings.responsive.active[bp] = true;
              $.event.trigger('breakpointActivated', bp);
            }
          }
          else {
            // if it was active, mark it as not active
            if (settings.responsive.active[bp] === true) {
              settings.responsive.active[bp] = false;
              $.event.trigger('breakpointDeactivated', bp);
            }
          }
        });
      };

      // Handle the intial load
      $(window).on('load', handleWindowLoad);

      // handle resize events - throttled with underscore.js (optional -
      // requires core/underscore be added as a dependency in
      // mytheme.libraries.yml)
      $(window).on('resize', _.throttle(handleResize, 200));
    }
  };
})(jQuery, Drupal);
