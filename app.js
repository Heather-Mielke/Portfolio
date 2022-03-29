$(() => {

  $(document).ready(function(){
      $('html, body').scrollTop(0)
  })
   ///////////////////////////////////////////////////////////////////////////
//Hamburger menu
///////////////////////////////////////////////////////////////////////////
//declaring variables for mobile view hamburger
const $menuButton = $('.hamburger');
const $mobileMenu = $('.mobile-nav');
const $mobileLink = $('.mobile-link');

//click function to add css class is active which ass the menu slide in
$menuButton.on('click', () => {
  $menuButton.toggleClass('is-active');
  $mobileMenu.toggleClass('is-active');


  })
  //click function to put away mobile menu on the click of a link
  $mobileLink.on('click', () => { 
      $mobileMenu.toggleClass('is-active')
  })

})