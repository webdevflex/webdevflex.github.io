
let sidebarHiden = document.querySelector('.side-bar');

sidebarHiden.addEventListener('click',hidenBar);

function hidenBar(){
    sidebarHiden.classList.toggle('side-bar-hiden');
}

//hiden text
let courceTextbtn = document.querySelector('.down-arrow-img');
let courseText = document.querySelector('.info-course-subtitle')

courceTextbtn.addEventListener('click',hidenCourseText);

function hidenCourseText(){
    courseText.classList.toggle('course-text-hiden');
}

//slider
$('.info-course-slider').slick({
    arrows:false
});