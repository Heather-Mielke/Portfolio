$(() => {
  const $menuButton = $('.hamburger');
  const $mobileMenu = $('.mobile-nav');

  $menuButton.click(function() {
    $menuButton.toggleClass('is-active');
    $mobileMenu.toggleClass('is-active');
  })

  imageIndex = 0;
  numOfImages = $('#project-images').children().length -1
  $('.next').on('click', () => {
    $('#project-images').children().eq(imageIndex).css('display', 'none')
    if (imageIndex < numOfImages) {
      imageIndex++
    }else {
      imageIndex = 0
    }
    $('#project-images').children().eq(imageIndex).css('display', 'block')
  })

  $('.back').on('click', () => {
    $('#project-images').children().eq(imageIndex).css('display', 'none')
    if (imageIndex > 0) {
      imageIndex--
    }else {
      imageIndex = numOfImages;
    }
    $('#project-images').children().eq(imageIndex).css('display', 'block')
  })
  })
