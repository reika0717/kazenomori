$(function() {
  $('.hamburger-menu').on('click', function() {
    $(this).toggleClass('hamburger-menu-active')
    $('.g-nav').toggleClass('off')
  })
})