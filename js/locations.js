(function ($, Drupal) {
  Drupal.behaviors.contactDropdown = {
    attach: function (context, settings) {
      var isopen;
      var value = $(".language-link").attr('value');

      if(value=='EN') {
        var england = $("h3:contains('United Kingdom')");
        var englandContent = $(england).next().get(0);
        $(england).addClass('open');
        $(englandContent).addClass('open');
      }

      if(value=='DE') {
        var germany = $("h3:contains('Deutschland')");
        var germanyContent = $(germany).next().get(0);
        $(germany).addClass('open');
        $(germanyContent).addClass('open');
      }

      if(value=='FR') {
        var france = $("h3:contains('France')");
        var franceContent = $(france).next().get(0);
        $(france).addClass('open');
        $(franceContent).addClass('open');
      }

      if(value=='NB') {
        var norway = $("h3:contains('Norge')");
        var norwayContent = $(norway).next().get(0);
        $(norway).addClass('open');
        $(norwayContent).addClass('open');
      }

      if(value=='SV') {
        var sweden = $("h3:contains('Sverige')");
        var swedenContent = $(sweden).next().get(0);
        $(sweden).addClass('open');
        $(swedenContent).addClass('open');
      }

      if(value=='DA') {
        var denmark = $("h3:contains('Danmark')");
        var denmarkContent = $(denmark).next().get(0);
        $(denmark).addClass('open');
        $(denmarkContent).addClass('open');
      }

      if(value=='EN-US') {
        var usa = $("h3:contains('United States')");
        var usaContent = $(usa).next().get(0);
        $(usa).addClass('open');
        $(usaContent).addClass('open');
      }

      $("h3").one().on('click touch tap', function() {
        var content = $(this).next().get(0);
        if ($(content).hasClass('open') && isopen) {
          $(content).removeClass('open');
          $(this).removeClass('open');
          isopen = false;
          preventDefault();
        } else {
          $(content).addClass('open');
          $(this).addClass('open');
          isopen = true;
          preventDefault();
        }
      });
      var isopen;
      $("h3").one().on('click touch tap', function() {
        var content = $(this).next().get(0);
        if ($(content).hasClass('open') && isopen) {
          $(content).removeClass('open');
          $(this).removeClass('open');
          isopen = false;
          preventDefault();
        } else {
          $(content).addClass('open');
          $(this).addClass('open');
          isopen = true;
          preventDefault();
        }
      });
    },
    detach: function(context, settings, trigger) {}
  }
})(jQuery, Drupal);