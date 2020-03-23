//launch the slider
$(document).ready(function(){
  $('.header_slider').slick({
    dots:true,
    draggable:true,
  });
 
});
//hide slider navigation
$(document).ready(function(){
  $('.menu__btn').click(function(event) {
      $('body').toggleClass('lock');
      $('.slick-prev.slick-arrow,.header_slider .slick-arrow.slick-next,.header_slider .slick-dots').toggleClass('nozindex');
  });
});
