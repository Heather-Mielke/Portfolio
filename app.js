$(() => {

  $(document).ready(function(){
      $('html, body').scrollTop(0)
  })

  $(window).scroll(function() {
    let scroll = $(window).scrollTop()
    console.log(scroll)
    if(scroll >=500) {
      $up.addClass('show-btn')
      
    }else{
      $up.removeClass('show-btn')
    }
  })




   ///////////////////////////////////////////////////////////////////////////
//Hamburger menu
///////////////////////////////////////////////////////////////////////////
//declaring variables for mobile view hamburger
const $menuButton = $('.hamburger');
const $mobileMenu = $('.mobile-nav');
const $mobileLink = $('.mobile-link');
const $close = $('#close');
const $project1 = $('.project1');
const $project2 = $('.project2');
const $project3 = $('.project3');
const $project4 = $('.project4');

const $modal1 = $('.project1-modal')
const $modal2 = $('.project2-modal')
const $modal3 = $('.project3-modal')
const $modal4 = $('.project4-modal')

const $close1 = $('.close1')
const $close2 = $('.close2')
const $close3 = $('.close3')
const $close4 = $('.close4')

const $up = $('.up')
//click function to add css class is active which ass the menu slide in
$menuButton.on('click', () => {
  $menuButton.toggleClass('is-active');
  $mobileMenu.toggleClass('is-active');


  })
  //click function to put away mobile menu on the click of a link
  $mobileLink.on('click', () => { 
      $mobileMenu.toggleClass('is-active')
  })
  //Click functions for project modals
  $project1.on('click', () => {
    $modal1.fadeIn('slow').toggleClass('add-modal')
  })
  $project2.on('click', () => {
    $modal2.fadeIn('slow').toggleClass('add-modal')
  })
  $project3.on('click', () => {
    $modal3.fadeIn('slow').toggleClass('add-modal')
  })
  $project4.on('click', () => {
    $modal4.fadeIn('slow').toggleClass('add-modal')
  })

  //Click functions for closing project modals
  $close1.on('click', () => {
    $modal1.fadeOut('slow').toggleClass('add-modal')
  })
  $close2.on('click', () => {
    $modal2.fadeOut('slow').toggleClass('add-modal')
  })
  $close3.on('click', () => {
    $modal3.fadeOut('slow').toggleClass('add-modal')
  })
  $close4.on('click', () => {
    $modal4.fadeOut('slow').toggleClass('add-modal')
  })

  

})