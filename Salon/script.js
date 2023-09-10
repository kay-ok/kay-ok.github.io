$(function() {
  $('#showlogin, .nav li:last-child').click(function() {
    $('#login-modal').fadeIn();
  });

  $('#close-btn, #submit-btn').click(function() {
    $('#login-modal').fadeOut();
  });

  $('.nav li:last-child').click(function(){
    $('html, body').scrollTop(0);
  });

  $('html, body').animate({
    'scrollTop': 0
  }, 'slow');

  $('header a').click(function() {
    var scroll = $(this).attr('href');
    var position = $(scroll).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 800);
  });

  $('.nav-toggle, .nav-menu-ul li').click(function(){
    $('.nav-toggle, .nav-toggle i, .nav').toggleClass('show');
  });
});