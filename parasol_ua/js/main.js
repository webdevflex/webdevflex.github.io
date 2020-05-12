//language
$(".btn-lang").click(function(e) {
  e.preventDefault();
  $(".btn-lang").removeClass('active');
  $(this).addClass('active');
})

$(document).ready(function() {
	$('.btn').click(function(event) {
		$('.top__excerption-block').removeClass('active')
		var num = $(this).attr('data-num');
		$('#test'+num).addClass('active')
	});
});

	$(".btn").click(function(e) {
		e.preventDefault();
		$(".btn").removeClass('active');
		$(this).addClass('active');
	})
//slider
$('.slider-comment').slick({
	dots:true
});

//slider news
$('.news__slider').slick({
	slidesToScroll: 1,
	// variableWidth: true,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1160,
        settings: {
        // centerMode: true,
        // centerPadding: '100px',
        slidesToShow: 3,
        slidesToScroll: 3  
    }
    },
    {
      breakpoint: 920,
        settings: {
          dots:true,
        // centerMode: true,
        // centerPadding: '130px',
        slidesToShow: 2,
        slidesToScroll: 2  
    }
  },
  {
    breakpoint: 610,
      settings: {
        dots:true,
      centerMode: true,
      centerPadding: '120px',
      slidesToShow: 1,
      slidesToScroll: 1  
  }
},
{
  breakpoint: 570,
    settings: {
      dots:true,
    // centerMode: true,
    // centerPadding: '120px',
    slidesToShow: 1,
    slidesToScroll: 1  
}
},
  ]
});
//style scrolle	
$(function()
{
	$('.scroll__conatainer').jScrollPane();
});

//добавление класса при клике
$('.burger__area, .header__menu').click(function(){
    $('.header__menu').toggleClass('menu_opened');
  })
  //добавление класса при клике на бургер для анимации
$('.burger__area').click(function(){
  $('.burger__menu').toggleClass('active_burger');
})
  //удаляем класс при клике на любую область
  $(document).click(function(event) {
      if ($(event.target).closest('.burger__area').length ) return;
      $('.header__menu, .burger__menu').removeClass('menu_opened active_burger');
      event.stopPropagation();
  });


//при скроле удаляем класс который добавляеться для показа меню
    $(window).scroll(function(){
      $('.header__menu, .burger__menu').removeClass('menu_opened active_burger');
      // $('.burger').removeClass('active_burger');
    });