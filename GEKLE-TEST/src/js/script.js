 //btn-active
 $(".time-btn").click(function(e) {
    e.preventDefault();
    $(".time-btn").removeClass('active');
    $(this).addClass('active');
  })
//btn-people
  $(".people-btn").click(function(e) {
    e.preventDefault();
    $(".people-btn").removeClass('active_people');
    $(this).addClass('active_people');
  })

//burger-menu
$(".burger-menu").click(function(e) {
  $(".header-menu-list").toggleClass('active_menu');
});

$(".burger-menu").click(function(e) {
  $(".burger-menu").toggleClass('active_burger_menu');
});
//border
$(".burger-menu").click(function(e) {
  $(".menu-mobile").toggleClass('border');
});