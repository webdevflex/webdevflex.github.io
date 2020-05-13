$(window).scroll(function(){
    $('.right').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+600){
            $(this).addClass('fadeInRight');
            
        }
    })
});
$(window).scroll(function(){
    $('.left').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+600){
            $(this).addClass('fadeInLeft');
        }
    })
});