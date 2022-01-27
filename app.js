$(() => {


  const $menuButton = $('.hamburger');
  const $mobileMenu = $('.mobile-nav');

  $menuButton.click(function() {
    $menuButton.toggleClass('is-active');
    $mobileMenu.toggleClass('is-active');
  })

  })
