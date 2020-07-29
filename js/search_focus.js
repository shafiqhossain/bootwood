(function ($, Drupal) {
  var mobileText = Drupal.t('What are you looking for?');
  Drupal.behaviors.searchFocus = {
    attach: function (context, settings) {
      $('#main-menu-search-focus-button ', context).once('searchFocus').each(function () {
        // events on the search element's search text and icon
        $("#main-menu-search-focus-button, .main-menu-search-focus-text").click(function () {
          if($(".block-views-exposed-filter-blocksearch-page-1 form").css("visibility") == "hidden") {
            showSearchLayer();
            // check that's mobile version and show back to menu element
            if(settings.responsive.active['bootwood.md'] == false) {
              showBackToMenu();
            }
          } else {
            hideSearchLayer();
            hideBackToMenu();
          }
        });

        // back to menu event on the mobile search
        $(".search-back-to-menu-container").on('click', function () {
          hideBackToMenu();
          hideSearchLayer();
        });

        // brakepoints settings
        if(settings.responsive.active['bootwood.md'] == false) {
          setSearchPlaceholder(mobileText);
        }
        $(window).on('breakpointDeactivated', handleBreakpointDeactivated);
        $(window).on('breakpointActivated', handleBreakpointActivated);
      });
    },
    detach: function (context, settings, trigger) {}
  };

  function hideBackToMenu() {
    $(".search-back-to-menu-container").hide();
  }

  function showBackToMenu() {
    $(".search-back-to-menu-container").show();
  }

  function setSearchPlaceholder($text) {
    $("#views-exposed-form-search-page-1 #edit-search-api-fulltext").attr("placeholder",
      $text);
  }

  function hideSearchLayer(){
    $(".block-views-exposed-filter-blocksearch-page-1 form").css("visibility", "hidden");
  }

  function showSearchLayer(){
    $(".block-views-exposed-filter-blocksearch-page-1 form").css("visibility", "visible");

    setTimeout(function(){
      $(".block-views-exposed-filter-blocksearch-page-1 form #edit-search-api-fulltext").focus();
    }, 500);
  }

  var handleBreakpointDeactivated = function (e, breakpoint) {
    if(breakpoint === 'bootwood.md') {
      setSearchPlaceholder(mobileText);
      hideSearchLayer();
    }
  };

  var handleBreakpointActivated = function (e, breakpoint) {
    if(breakpoint === 'bootwood.md') {
      setSearchPlaceholder(Drupal.t('Type and press <<Enter>> to search'));
      hideSearchLayer();
      hideBackToMenu();
    }
  }
})(jQuery, Drupal);
