var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


var scene = document.getElementById('form-Paralax');
var parallaxInstance = new Parallax(scene);

//slick-slider
$('.price-slider').slick({
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll:3,
    dots:true,
    arrows:false,
    // centerMode: true,
    // centerPadding: '100px',
    
});

// Отправка заявки 
$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});


 //button up
 $(function() {
	// при нажатии на кнопку scrollup
	$('.scrollup').click(function() {
	  // переместиться в верхнюю часть страницы
	  $("html, body").animate({
		scrollTop:0
	  },1000);
	})
  })