$(() => {
  //declaring variables
  const $menuButton = $('.hamburger');
  const $mobileMenu = $('.mobile-nav');


  //click function to add css class is active which ass the menu slide in
  $menuButton.on('click', () => {
    $menuButton.toggleClass('is-active');
    $mobileMenu.toggleClass('is-active');
  })

  //Determining screens width, will only run carousel if screen is larger than 800px
  const screenSize = () => {
    if ($(window).width() >= 800) {
      ///carousel
      imageIndex = 0;
      numOfImages = $('#project-images').children().length -1
      $('.next').on('click', () => {
        $('#project-images').children().eq(imageIndex).css('display', 'none')
        if (imageIndex < numOfImages) {
          imageIndex++
          //if else to change link depending on project index
          if (imageIndex === 1){
            $('.live').attr('href','https://codepen.io/your-work/')
          }else if (imageIndex === 2) {
            $('.live').attr('href','https://codepen.io/your-work/')
          }else if (imageIndex === 3) {
            $('.live').attr('href','https://codepen.io/your-work/')
          }
        }else {
          imageIndex = 0
          if (imageIndex === 0) {
            $('.live').attr('href','https://github.com/Heather-Mielke')
          }
        }
        $('#project-images').children().eq(imageIndex).css('display', 'block')

      })

      $('.back').on('click', () => {
        $('#project-images').children().eq(imageIndex).css('display', 'none')
        if (imageIndex > 0) {
          imageIndex--
          //if else to change link depending on project index
          if (imageIndex === 0) {
            $('.live').attr('href','https://github.com/Heather-Mielke')
          }else if (imageIndex === 1){
            $('.live').attr('href','https://codepen.io/your-work/')
          }else if (imageIndex === 2) {
            $('.live').attr('href','https://codepen.io/your-work/')
          }
        }else {
          imageIndex = numOfImages;
           if (imageIndex === 3) {
            $('.live').attr('href','https://codepen.io/your-work/')
          }
        }
        $('#project-images').children().eq(imageIndex).css('display', 'block')
      })
    }else {
      $('#project-images').children().css('display', 'block')
    }//^^cant get this to display all the images after going through the carousel. only if you do not use the carousel.
  }
//
  // const smallScreen = () => {
  //   if ($(window).width() <= 800) {
  //     // $('.project1').css('display', 'block')
  //     // $('.project2').css('display', 'block')
  //     // $('.project3').css('display', 'block')
  //     // $('.project4').css('display', 'block')
  //     $('#project-images').children().css('display', 'none')
  //   }else {
  //     screenSize()
  //   }
  // }

  screenSize()

  $('.send-button').on('click', () => {
    window.location.href = 'thankyou.html'
  })
  //write a function to initiate when send button hit in contact to clear contents and make the check mark send button
  // smallScreen()

})
