
const loading = document.querySelector('#loading');

window.addEventListener('load',() => {
  loading.classList.add('loaded');
});



$(function(){ 
    const mainBg = document.querySelector('#main-bg');
    const firstSection = document.querySelector('#first-section');
    const works = document.querySelector('#works');
    const footer = document.querySelector('.footer');
  
  
    $('.btn-area').on('click', function(){
      $(mainBg).toggleClass('lightTheme');
      $(firstSection).toggleClass('hide');
      $(works).toggleClass('appear');
      $(footer).toggleClass('appear');
      $('.message').toggleClass('appear');
  
      if($(mainBg).hasClass('lightTheme') == true) {        
        $(mainBg).css('backgroundAttachment', 'fixed')
        $(mainBg).css('backgroundSize', 'cover')
        $(mainBg).css('backgroundPosition', 'right')
      } else {
        $(mainBg).css('backgroundAttachment', 'fixed')
        $(mainBg).css('backgroundSize', 'cover')
        $(mainBg).css('backgroundPosition', 'center')
        // 左右に動くのを禁止する
      }
    });
});



// 以下、レスポンシブ

  if (window.matchMedia('(max-width: 640px) and (min-width:820px)')) {
    
    $(function(){ 
        $('.btn-area').on('click', function(){
          if($(mainBg).hasClass(lightTheme)) {
           $('#right-wrapper').css('width', '50%');

          } else {
            $('#right-wrapper').css('width', '0%');
          }
        });
      });
};  

$('.btn-area').on('click', function(){
  $('#right-wrapper').toggleClass('right');
});
