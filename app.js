$(document).ready(function() {
  //makes page jump to top when refreshed
  $('html, body').scrollTop(0);
  ///////////////////////////////////////////////////////////////////////////
  //Hamburger menu
  ///////////////////////////////////////////////////////////////////////////
  //declaring variables for mobile view hamburger
  const $menuButton = $('.hamburger');
  const $mobileMenu = $('.mobile-nav');


  //click function to add css class is active which ass the menu slide in
  $menuButton.on('click', () => {
    $menuButton.toggleClass('is-active');
    $mobileMenu.toggleClass('is-active');
  })
  ///////////////////////////////////////////////////////////////////////////
  //declare variables for quiz
  const $startButton = $('#start-button')
  const $quizBeginning = $('.quiz-beginning')
  const $quizContainer = $('.quiz-container');
  const $submitAnswers = $('#submit');
  const $quizButton = $('.quiz-button')
  const $results = $('#results');

  const $button1 = $('#button1');
  const $button2 = $('#button2');
  const $button3 = $('#button3');
  const $button4 = $('#button4');

  const $button5 = $('#button5');
  const $button6 = $('#button6');
  const $button7 = $('#button7');
  const $button8 = $('#button8');

  const $button9 = $('#button9');
  const $button10 = $('#button10');
  const $button11 = $('#button11');
  const $button12 = $('#button12');

  const $button13 = $('#button13');
  const $button14 = $('#button14');
  const $button15 = $('#button15');
  const $button16 = $('#button16');

  const answers = [];
  const correctAnswers = ["B","C","D","D"];
  ///////////////////////////////////////////////////////////////////////////
  ///carousel with roatating links
  ///////////////////////////////////////////////////////////////////////////
  imageIndex = 0;
  numOfImages = $('#project-images').children('img').length -1
  $('.next').on('click', () => {
    $('#project-images').children('img').eq(imageIndex).css('display', 'none')
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
    $('#project-images').children('img').eq(imageIndex).css('display', 'block')

  })

  $('.back').on('click', () => {
    $('#project-images').children('img').eq(imageIndex).css('display', 'none')
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
    $('#project-images').children('img').eq(imageIndex).css('display', 'block')
  })
  // }
  ///////////////////////////////////////////////////////////////////////////
  //Quiz Section//
  ///////////////////////////////////////////////////////////////////////////
  //Trying to make a popup by the lightbulb to give notice of quiz
  // $('.bulb').hover(function() {
  //   $('.bulb').append('<p>').addClass('popup-quiz-over')
  //   $('.popup-quiz-over').text('Test your knowledge');
  // }, function() {
  //   $('.bulb').removeClass('popup-quiz-over');
  // });

  //First Question buttons
  $button1.on('click', () => {
    $button1.css('background', '#888888')
    answers.push('A')
  })
  $button2.on('click', () => {
    $button2.css('background', '#888888')
    answers.push('B')
  })
  $button3.on('click', () => {
    $button3.css('background', '#888888')
    answers.push('C')
  })
  $button4.on('click', () => {
    $button4.css('background', '#888888')
    answers.push('D')
  })
  //Second question buttons
  $button5.on('click', () => {
    $button5.css('background', '#888888')
    answers.push('A')
  })
  $button6.on('click', () => {
    $button6.css('background', '#888888')
    answers.push('B')
  })
  $button7.on('click', () => {
    $button7.css('background', '#888888')
    answers.push('C')
  })
  $button8.on('click', () => {
    $button8.css('background', '#888888')
    answers.push('D')
  })
  //Third question buttons
  $button9.on('click', () => {
    $button9.css('background', '#888888')
    answers.push('A')
  })
  $button10.on('click', () => {
    $button10.css('background', '#888888')
    answers.push('B')
  })
  $button11.on('click', () => {
    $button11.css('background', '#888888')
    answers.push('C')
  })
  $button12.on('click', () => {
    $button12.css('background', '#888888')
    answers.push('D')
  })
  //Fourth question buttons
  $button13.on('click', () => {
    $button13.css('background', '#888888')
    answers.push('A')
  })
  $button14.on('click', () => {
    $button14.css('background', '#888888')
    answers.push('B')
  })
  $button15.on('click', () => {
    $button15.css('background', '#888888')
    answers.push('C')
  })
  $button16.on('click', () => {
    $button16.css('background', '#888888')
    answers.push('D')
  })

  //hides the start quiz section
  $startButton.on('click', () => {
    $quizBeginning.addClass('quiz-start');
  })
  // console.log($quizBeginning);

  //determines results of the quiz by equating values
  const results = () => {
    if (answers[0] === correctAnswers[0] && answers[1] === correctAnswers[1] && answers[2] === correctAnswers[2] && answers[3] === correctAnswers[3]) {
      $results.text('WOW, You really know Heather! You Scored 100%!');
    }else if (answers[0] !== correctAnswers[0] && answers[1] === correctAnswers[1] && answers[2] === correctAnswers[2] && answers[3] === correctAnswers[3] || answers[0] === correctAnswers[0] && answers[1] !== correctAnswers[1] && answers[2] === correctAnswers[2] && answers[3] === correctAnswers[3] || answers[0] === correctAnswers[0] && answers[1] === correctAnswers[1] && answers[2] !== correctAnswers[2] && answers[3] === correctAnswers[3] || answers[0] === correctAnswers[0] && answers[1] === correctAnswers[1] && answers[2] === correctAnswers[2] && answers[3] !== correctAnswers[3]) {
      $results.text('Looks like you pay attention! You scored 75%!');
    }else if (answers[0] !== correctAnswers[0] && answers[1] !== correctAnswers[1] && answers[2] === correctAnswers[2] && answers[3] === correctAnswers[3] || answers[0] !== correctAnswers[0] && answers[1] === correctAnswers[1] && answers[2] !== correctAnswers[2] && answers[3] === correctAnswers[3] || answers[0] !== correctAnswers[0] && answers[1] === correctAnswers[1] && answers[2] === correctAnswers[2] && answers[3] !== correctAnswers[3] || answers[0] === correctAnswers[0] && answers[1] !== correctAnswers[1] && answers[2] !== correctAnswers[2] && answers[3] === correctAnswers[3] || answers[0] === correctAnswers[0] && answers[1] !== correctAnswers[1] && answers[2] === correctAnswers[2] && answers[3] !== correctAnswers[3] || answers[0] === correctAnswers[0] && answers[1] === correctAnswers[1] && answers[2] !== correctAnswers[2] && answers[3] !== correctAnswers[3]) {
      $results.text('You scored 50%, not too shabby!');
    }else if (answers[0] !== correctAnswers[0] && answers[1] !== correctAnswers[1] && answers[2] !== correctAnswers[2] && answers[3] === correctAnswers[3] || answers[0] !== correctAnswers[0] && answers[1] !== correctAnswers[1] && answers[2] === correctAnswers[2] && answers[3] !== correctAnswers[3] || answers[0] !== correctAnswers[0] && answers[1] === correctAnswers[1] && answers[2] !== correctAnswers[2] && answers[3] !== correctAnswers[3] || answers[0] === correctAnswers[0] && answers[1] !== correctAnswers[1] && answers[2] !== correctAnswers[2] && answers[3] !== correctAnswers[3]){
      $results.text('You scored 25%, could have done better...')
    }else {
      $results.text('You scored 0%! Better take another look at Heather\'s portfolio!')
    }
  }
  // console.log(answers);
  // console.log(correctAnswers);
  //returns to results funciton for quiz
  $submitAnswers.on('click', results)


  //sending to thank you page after submitting contact form
  // $('.send-button').on('click', () => {
  //   window.location.href = 'thankyou.html'
  // })

})
