$(function(){
});


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
  }
});

$('.section-title .bgappearTrigger').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if (isInView) {
    //要素が見えたときに実行する処理
    $(this).addClass('bgappear');
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


const fadeBox = document.querySelectorAll('.box');
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
for (let i = 0; i < fadeBox.length; i++){
  const keyframes = {
    // opacity: [0, 1],
    rotate: ['35deg', 0],
    // scale: [1.4, 1],
    filter: ['blur(20px)', 'blur(0)'],
    translate: ['0 4px', 0],
  };
  const options = {
    duration: 405,
    delay: i * 145,
    fill: 'forwards',
  };

  setTimeout(function(){
  fadeBox[i].animate(keyframes, options);
  },2600);
}

  setTimeout(function(){
    $('#overWright').fadeOut(850);
    // $('.lamp').removeClass('lamp-opacity');
    $('.lamp').addClass('fadeIn');
  }, 5150);

// ここまで



//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 5.3,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.linear,//動きの加速減速設定
},
function(){
       $("#mask").attr("class", "done");//描画が終わったらdoneというクラスを追加
}
);

$(window).on('load',function(){
  $("#splash").delay(2700).fadeOut(0);//ローディング画面を3秒（3000ms）待機してからフェイドアウト
	$("#splash_logo").delay(2700).fadeOut(100);//ロゴを3秒（3000ms）待機してからフェイドアウト
        stroke.play();//SVGアニメーションの実行
});

// if(matchMedia('(min-width: 768px)').matches){
//   luxy.init();
//   } 


// $(window).on('load resize', function() {
//   var windowWidth = window.innerWidth;
//   var elements = $('#fixed-area');
//   if (windowWidth >= 768) {
//   Stickyfill.add(elements);
//   }else{
//   Stickyfill.remove(elements);
//   } 
//   });

$('#chart').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
  if (isInView) {
    var ctx = document.getElementById('chart');
    var data = {
      labels: ["HTML", "CSS", "JavaScript", "jQuery", "React", "Python"],
      datasets: [{
          label: 'プログラミングスキル',
          data: [5, 5, 3, 4, 0, 1],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgb(54, 162, 235)'
    }]
};

var options = {
    indexAxis: 'y',
    responsive: true,
    display: false,
    scales: {
        x:{
            beginAtZero:true,
              suggestedMax: 10,
              suggestedMin: 0,
            ticks:{
              stepSize: 1,
            //   callback: function(value){
						// return  value +  '%'//数字＋%で表示
            },
          }
      }
    };

var chart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

  }
});



function scrollTimelineAnime() {
  $('.mytimeline li').each(function(){
    var elemPos = $(this).offset().top; //要素の位置（上から）
    var scroll = $(window).scrollTop(); //スクロール値（上から）
    var windowHeight = $(window).height();  //windowの高さ値
    var startPoint = 220; //線のスタート位置
    if (scroll >= elemPos - windowHeight - startPoint) {
      var H = $(this).outerHeight(true); //liの余白と高さ
      var percent = (scroll + startPoint - elemPos) / (H/2) * 100;

      if (percent > 100){
        percent = 100;
      }
      $(this).children('.border-line').css({
        height: percent + "%",
      });
    }
  });
}

$(window).on('scroll',function(){
  scrollTimelineAnime();
});