$(function(){
    $('.toggles button').click(function(){
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });
    $('#showall').click(function(){
        $('.post').show(500);
    });
});


$(document).ready(function(){//сколько items будет отображаться на экране
    $(".owl-carousel").owlCarousel({
        items:8
    });
});

if($(window).width() < 420){//условие если ширина нашего окна будет 420px то будет выводиться кол-тво items
    $(".owl-carousel").owlCarousel({
        items:3
    });
}
 



