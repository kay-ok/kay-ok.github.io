
const loading = document.querySelector('#loading');

window.addEventListener('load',() => {
  loading.classList.add('loaded');
});


$(function() {
  $.scrollify({
    section : "適応したい要素名(この場合はsection)",
  });
});


const btn = document.querySelector('.btn-area');
// const bgc = document.querySelector('#bgc');
const btnText = document.querySelector('#btn-graphic');

// const btnTextJP = ("ランプのシェードに触れると、色覚に障がいがある方にとって見やすい色に変わります。");
const btnTextJP = ("ランプシェードに触れてダークモードをONにする");
// const btnTextEN = ("Touch lampshade if you are COLOR BLINDNESS person. This Website's colors will be changed, easy to read for you.");
const btnTextEN = ("ランプシェードに触れてダークモードをOFFにする");
const boxes = document.getElementsByClassName('box');

// const formColors = document.querySelectorAll('.contact-form span');
// const formColorAlt = document.querySelectorAll('.contact-form span');


// btn.addEventListener('click', () => {
//   document.body.classList.toggle('dark-theme');
// });
  

// テキスト切り替えJS
// btn.addEventListener('click', () => {

//   if(btnText.textContent === btnTextEN) {
//     btnText.textContent = btnTextJP;
//   } else {
//     btnText.textContent = btnTextEN;
//     }
// });    

  
// 新テキスト切り替えふわっとJS
// const messages = document.querySelectorAll('.message');
// let i = 1;

// function messageAppear() {
//   if (i > 2) {
//     i = 0;
//   }

//   messages.forEach(message => {
//     message.classList.remove('appear');    
//   });

//   messages[i].classList.add('appear');
//   i++;
// }

// setInterval(messageAppear, 3000);

// const boxes = document.querySelectorAll('.box');
// const hasDark = document.body.classList.contains('dark-theme');

// btn.addEventListener('click', () => {

//   if(hasDark == true) {
//     boxes.classList.remove('boxLight');
//     boxes.classList.add('boxDark');
//   } else {
//     boxes.classList.remove('boxDark');
//     boxes.classList.add('boxLight');
//   }
// });

$(function(){ 

$('.nav_toggle').on('click', function(){
    $('.nav_toggle, .nav').toggleClass('show');
  });
 

  const darkBx = document.querySelectorAll('.box');
  const darkFc = document.querySelectorAll('.section-title, .sub-title, .text dt, .text dd, .chart-text p, .mytimeline, .works-contents p, .footer p');
  // const idDarkFc = document.getElementById('aboutme');
  // const darkBgc = document.querySelector('.border-line');
  const mainBg = document.querySelector('#main-bg');
  // .mytimeline em border-bottom #d7fffe
  const firstSection = document.querySelector('#first-section');
  const works = document.querySelector('#works');
  const footer = document.querySelector('.footer');


  $('.btn-area').on('click', function(){
    $(mainBg).toggleClass('lightTheme');
    $(firstSection).toggleClass('hide');
    $(works).toggleClass('appear');
    $(footer).toggleClass('appear');
    $('.message').toggleClass('appear');
    $('.mytimeline em').toggleClass('mtlbbDark');
    $('#btn-graphic').toggleClass('dark');
    $('.scrolldown2').toggleClass('dark');
    $('.scrolldown2 span').toggleClass('dark');

    if($(mainBg).hasClass('lightTheme') == true) {
      // $(mainBg).css('background', 'url("img/Shst4kmozjpeg_134745942238402160.jpg") no-repeat')
      // $(mainBg).css('filter', 'contrast(105%) saturate(190%) brightness(100%) grayscale(0%)')
      
      $(mainBg).css('backgroundAttachment', 'fixed')
      $(mainBg).css('backgroundSize', 'cover')
      $(mainBg).css('backgroundPosition', 'right')
      $(darkBx).css('color', '#fff')
      $(darkBx).css('textShadow', '2.5px 1.95px 1px #000')
      $(btnText).css('color', '#fff')
      $(btnText).css('border', '1px solid #fff')
      // $('#main-bg').classList.remove()


      // $(darkBx).css('textShadow', '3px 1.25px .1px #606060')
      // $(darkFc).css('color', '#f4d03f')
      // $(darkFc).css('color', '#f9f047')
      $(darkFc).css('color', '#d7fffe')
      $(darkFc).css('textShadow', '2.5px 1.95px 1px #000')
      // $('.section-title').css('textShadow','3.2px 1.35px .125px #606060')
      // $('.sub-title').css('textShadow', '2.25px .937px .075px #606060')
      // $(idDarkFc).css('color', 'coral')
      
      // $(darkBgc).css('backgroundColor', '#fff')

    } else {
      // $(darkBx).css('color', '#d7fffe')
      
      // $(mainBg).css('filter', 'contrast(90%) saturate(90%) brightness(100%) grayscale(100%)')
      // $(mainBg).css('background', 'url("img/Shst4kmozjpeg_134745942238402160.jpg") no-repeat')
      $(mainBg).css('backgroundAttachment', 'fixed')
      $(mainBg).css('backgroundSize', 'cover')
      $(mainBg).css('backgroundPosition', 'center')
      // 左右に動くのを禁止する
      $(darkBx).css('color', '#d7fffe')
      $(darkBx).css('textShadow', '2.5px 1.95px 1px #000')
      $(btnText).css('color', '#fff')
      $(btnText).css('border', '1px solid #fff')

      // $('#main-bg').add('background', 'url(img/Shst4kmozjpeg_134745942238402160.jpg) no-repeat')
      
      // $(darkBx).css('textShadow', '3px 1.25px .1px #000')
      $(darkFc).css('color', '#d7fffe')
      // $(darkFc).css('textShadow', '2.5px 1.95px 1px #d7fffe')
      $(darkFc).css('textShadow', '2.5px 1.95px 1px #000')
      // $(idDarkFc).css('color', '#d7fffe')
      // $('.section-title').css('textShadow','3.2px 1.35px .125px #000')
      // $('.sub-title').css('textShadow', '2.25px .937px .075px #000')
      
      // $(darkBgc).css('backgroundColor', '#d7fffe')
    }
  });
 



  
 



  $('header a').click(function() {
    var scroll = $(this).attr('href');
    var position = $(scroll).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 2100);
  });
});



  // const btn = document.querySelector('#btn');

  // btn.addEventListener('click', () => {
  //   document.header.classList.toggle('dark-theme');
  // });
  // ここまでトグルアクション

  // $('#header .nav-toggle').click(function(){
  //   $('.header-nav ul li:nth-child(-n+3').fadeOut();
  // });

// セクションアニメーション一度だけここから

// 動きのきっかけの起点となるアニメーションの名前を定義
// function BgFadeAnime(){

//   // 背景色が伸びて出現（左から右）
// $('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
//   var elemPos = $(this).offset().top-50;//要素より、50px上の
//   var scroll = $(window).scrollTop();
//   var windowHeight = $(window).height();
//   if (scroll >= elemPos - windowHeight){
//     $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
//   }else{
//     $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
//   }
// });	

//  // 文字列を囲う子要素
// $('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
//   var elemPos = $(this).offset().top-50;//要素より、50px上の
//   var scroll = $(window).scrollTop();
//   var windowHeight = $(window).height();
//   if (scroll >= elemPos - windowHeight){
//     $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
//   }else{
//     $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
//   }
// });		
// }

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function (){
//   BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
// });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 一度だけ表示ここまで


// ここからinnview
$('.section-title .bgLRextendTrigger').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if (isInView) {
    //要素が見えたときに実行する処理
    $(this).addClass('bgLRextend');
  } else {
    $(this).removeClass('bgLRextend');
  }
});

$('.section-title .bgappearTrigger').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if (isInView) {
    //要素が見えたときに実行する処理
    $(this).addClass('bgappear');
  } else {
    $(this).removeClass('bgappear');
  }
});

$('.sub-title .bgLRextendTrigger').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if (isInView) {
    //要素が見えたときに実行する処理
    $(this).addClass('bgLRextend');
  } else {
    //要素が見えなくなったときに実行する処理
    $(this).removeClass('bgLRextend');
  }
});

$('.sub-title .bgappearTrigger').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if (isInView) {
    //要素が見えたときに実行する処理
    $(this).addClass('bgappear');
  } else {
    //要素が見えなくなったときに実行する処理
    $(this).removeClass('bgappear');
  }
});


// const fadeBox = document.querySelectorAll('.box');
// // 拡大回転スタートverここから。.boxのblur値外してopacityを0にする
// for (let i = 0; i < fadeBox.length; i++){
//   const keyframes = {
//     opacity: [0, 1],
//     rotate: ['5deg', 0],
//     scale: [1.4, 1],

//     // translate: ['0 50px', 0],
//   };
//   const options = {
//     duration: 750,
//     delay: i * 180,
//     fill: 'forwards',
//   };
//   setTimeout(function(){
//   fadeBox[i].animate(keyframes, options);
//   },5900);
// }


// blur verここから。CSS .boxにblur値をつけてから
// LPではBlurを外す
// const fadeBox = document.querySelectorAll('.box');

// for (let i = 0; i < fadeBox.length; i++){
//   const keyframes = {
//     rotate: ['20deg', 0],
//     filter: ['blur(25px)', 'blur(0)'],
//     translate: ['0 4px', 0],
//   };
//   const options = {
//     duration: 400,
//     delay: i * 135,
//     fill: 'forwards',
//   };

//   setTimeout(function(){
//   fadeBox[i].animate(keyframes, options);
//   },137);
// }

  // setTimeout(function(){
  //   $('#overWright').fadeOut(850);
  //   $('.lamp').removeClass('lamp-opacity');
  //   $('.lamp').addClass('fadeIn');
  // }, 5150);

// ここまで


// チャートセクション

// borderColor 初期値 borderColor: 'rgb(54, 162, 235)'




// 横棒グラフ
$('#chart').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
  if (isInView) {
    var ctx = document.getElementById('chart');
    var data = {
      labels: ["HTML", "CSS", "JavaScript", "jQuery", "Python"],
      datasets: [{
          label: '現役エンジニアを10とした自身のスキル',
          data: [6.5, 6, 4, 5, 3],
          backgroundColor:[
            "rgba(153, 102, 255, 0.35)"
          ],
          borderColor: [
            "rgba(215, 255, 254, 1)"
          ],
          fontColor: [
            "rgba(255, 255, 255, 1)"
          ]
    }]
  }
};

var options = {
    indexAxis: 'y',
    responsive: true,
    display: false,
    maintainAspectRatio: false,
    scales: {
        x:{
            beginAtZero:true,
              suggestedMax: 10,
              suggestedMin: 0,
            ticks:{
              stepSize: 1,
            },
          }
      },
    options: {
      }
    };


var chart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

  }
);
// 旧チャートここまで




// $('#chart').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
//     if (isInView) {
//       var ctx = document.getElementById("Chart");
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         },
//         responsive: false
//     }
// });


// Ver1.0
// function scrollTimelineAnime() {
//   $('.mytimeline li').each(function(){
//     var elemPos = $(this).offset().top; //要素の位置（上から）
//     var scroll = $(window).scrollTop(); //スクロール値（上から）
//     var windowHeight = $(window).height();  //windowの高さ値
//     var startPoint = 220; //線のスタート位置
//     if (scroll >= elemPos - windowHeight - startPoint) {
//       var H = $(this).outerHeight(true); //liの余白と高さ
//       var percent = (scroll + startPoint - elemPos) / (H/2) * 100;

//       if (percent > 100){
//         percent = 100;
//       }
//       $(this).children('.border-line').css({
//         height: percent + "%",
//       });
//     }
//   });
// }

// $(window).on('scroll',function(){
//   scrollTimelineAnime();
// });


function ScrollTimelineAnime(){
	$('.mytimeline li').each(function(){// それぞれのli要素の
		var elemPos = $(this).offset().top;// 上からの高さ取得
		var scroll = $(window).scrollTop();// スクロール値取得
		var windowHeight = $(window).height();// windowの高さ取得
		var startPoint = 220; //線をスタートさせる位置を指定※レイアウトによって調整してください
		if (scroll >= elemPos - windowHeight-startPoint){				
			var H = $(this).outerHeight(true)//liの余白と高さを含めた数値を取得
			//スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
			var percent = (scroll+startPoint - elemPos) / (H/2) *100;//liの余白と高さの半分で線を100％に伸ばす

			// 100% を超えたらずっと100%を入れ続ける
			if(percent  > 100){
				percent  = 100;
			}
			// ボーダーの長さをセット
			$(this).children('.border-line').css({
				height: percent + "%", //CSSでパーセント指定
			});
		} 
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('scroll', function(){
	ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});













// 以下、レスポンシブ

// menuIconSPだけ実装する
if (window.matchMedia('(max-width: 640px) and (min-width:820px)')) {

  const menuIconSP = document.querySelector('.nav_toggle');
  const navSP = document.querySelector('.nav');
  const navMessage = document.getElementById('nav_message');
  const navMessageText = document.getElementById("nav_message_text");
  const showSP = document.getElementsByClassName("showSP");

  menuIconSP.addEventListener('click',() => {
    navSP.classList.toggle('showSP');
    navMessageText.toggle('showSP');

    if(menuIconSP.contains('.show')) {
      navMessageText.style.visibility = "visible";
    } else {
      navMessageText.style.visibility = "hidden";
    }
  });

  

  menuIconSP.addEventListener('click',() => {

    if(navSP.style.visibility == "visible") {
      navMessageText.style.visibility = "visible";
    } else {
      navMessageText.style.visibility = "hidden";
    }
  });



// ボタンの位置をキープしたまま非表示をトグル
  document.getElementById("nav_message_text").style.visibility = "hidden";

  function clickBtnAC() {
    
    if(navMessageText.style.visibility == "visible") {
      navMessageText.style.visibility = "hidden";
      // navMessageText.classList.add('textAnimation');
      // navMessageText.classList.remove('textAnimationRev');
    } else {
      navMessageText.style.visibility = "visible";
      // navMessageText.classList.remove('textAnimation');
    }
  };

  // message表示時アニメーション
  const linkShow = document.querySelector(".linkshow");

  linkShow.addEventListener("click", function() {
    navMessageText.animate(
      {
        opacity: [0, 1],
        transform:["translateY(10px)", "translateY(0)"]
      },
      {
        fill: "forwards",
        duration: 250,
      }
    );  
  });



  btn.addEventListener('click', () => {
    if(navMessageText.textContent === btnTextEN) {
      navMessageText.textContent = btnTextJP;
    } else {
      navMessageText.textContent = btnTextEN;
    }
  })



  // function ScrollTimelineAnime(){
  //   $('.mytimeline li').each(function(){// それぞれのli要素の
  //     var elemPos = $(this).offset().top;// 上からの高さ取得
  //     var scroll = $(window).scrollTop();// スクロール値取得
  //     var windowHeight = $(window).height();// windowの高さ取得
  //     var startPoint = 100; //線をスタートさせる位置を指定※レイアウトによって調整してください
  //     if (scroll >= elemPos - windowHeight-startPoint){				
  //       var H = $(this).outerHeight(true)//liの余白と高さを含めた数値を取得
  //       //スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
  //       var percent = (scroll+startPoint - elemPos) / (H/2) *100;//liの余白と高さの半分で線を100％に伸ばす
  
  //       // 100% を超えたらずっと100%を入れ続ける
  //       if(percent  > 100){
  //         percent  = 100;
  //       }
  //       // ボーダーの長さをセット
  //       $(this).children('.border-line').css({
  //         height: percent + "%", //CSSでパーセント指定
  //       });
  //     } 
  //   });
  // }

};



// $('.btn-area').on('click', function(){
//   $('#nav_message_text').toggleClass('appear');
// });

  // message表示時アニメーションJquery
 
  



  // const btnAC = document.querySelector('.nav ul li a:nth-child(4)');
  // const addAnimation = document.classList.add(textAnimation);

  // btnAC.addEventListener('click', 'addAnimation');
  
  
  // const InOut = () => {


  // }
  // btnAC.addEventListener('click', )
  
// ここから上はいじらない

  // btn.addEventListener('click', () => {

  //   if(btnText.textContent === btnTextEN) {
  //   navMessageText.textContent = btnTextJP;
  //   document.body.classList.add('darkTheme');
  //   } else {
  //   navMessageText.textContent = btnTextEN;
  //   document.body.classList.remove('darkTheme');
  //   }
  // });    
  
  

  // const bgc = document.querySelector('#bgc');
  // const btnText = document.querySelector('#btn-graphic');


  // const formColors = document.querySelectorAll('.contact-form span');
  // const formColorAlt = document.querySelectorAll('.contact-form span');


  // btn.addEventListener('click', () => {
  //   document.body.classList.toggle('dark-theme');
  // });
  




  // function clickBtnTG() {
  //   if(menuIconSP.classList.contains(show)) {
  //     navMessageText.style.visibility = "visible";
  //   } else {
  //     navMessageText.style.visibility = "hidden";
  //   }
  // };

// 参照
//   const menuIconSP = document.querySelector('.nav_toggle');
//   const navSP = document.querySelector('.nav');
//   const navMessage = document.getElementById('nav_message');
//   const showSP = document.getElementsByClassName("showSP");
// const navMessageText = document.getElementById("nav_message_text");
// const btnTextJP = ("ランプのシェードに触れると、色覚に障がいがある方にとって見やすい色に変わります。");
// const btnTextEN = ("Touch lampshade if you are COLOR BLINDNESS person. This Website's colors will be changed, easy to read for you.");









// if (window.matchMedia('(max-width: 640px)').matches) {

//   document.getElementById("nav_message_text").style.visibility = "hidden";

//   function clickBtnAC() {
//     const navMessageText = document.getElementById("nav_message_text")
    
//     if(navMessageText.style.visibility == "visible") {
//       navMessageText.style.visibility = "hidden";
//     } else {
//       navMessageText.style.visibility = "visible";
//     }
//   }
// };






  // const messageBtn = document.getElementById('nav_btn');
  // const messageText = document.getElementById('nav_message_text');

  // messageBtn.addEventListener('click', () => {
  //   messageText.classList.add('hidden');
  // });




// $(function(){ 
//   $('.nav_toggle').on('click', function(){
//     $('.nav_message').addClass('showSP');
//   });