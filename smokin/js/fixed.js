$(document).scroll (function(){
    if($(document).scrollTop()>$('header').height()-350)
    $('nav').addClass('fixed');
   else
        $('nav').removeClass('fixed'); 
});
// если при скроле высота ксласса больше то добавляем новый клас 
// если при скроле назад удаляем класс