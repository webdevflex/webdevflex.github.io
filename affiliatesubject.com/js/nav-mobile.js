const menuToggle = document.querySelector('#menu-togle');/* при клике меняеться Бургер*/
const mobileNavContainer = document.querySelector('#mobile-nav');/*при клике появляеться меню*/
menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');/*Бургер*/
    mobileNavContainer.classList.toggle('mobile-nav--active');/*при клике появляеться меню*/
}