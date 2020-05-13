(function($) {
  
    $('nav').append('<span class="bg"></span>');
  
    var $bgNav = $('nav .bg');
    $('#nav a').hover(function(e) {
      var $link = $(this);
      $bgNav.css({
        width: $link.outerWidth(),
        height:  $link.outerHeight(),
        left: $link.position().left
      }).addClass('show');
    }, function() {
      $bgNav.removeClass('show');
    });
  
  })(jQuery);
  