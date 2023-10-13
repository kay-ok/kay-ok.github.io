
const loading = document.querySelector('#loading');

window.addEventListener('load',() => {
  loading.classList.add('loaded');
});


const boxes = document.getElementsByClassName('box, scrollbar');
const fadeBox = document.querySelectorAll('.box, .scrollbar');

for (let i = 0; i < fadeBox.length; i++){
  const keyframes = {
    rotate: ['20deg', 0],
    filter: ['blur(25px)', 'blur(0)'],
    translate: ['0 4px', 0],
  };
  const options = {
    duration: 395,
    delay: i * 130,
    fill: 'forwards',
  };

  setTimeout(function(){
  fadeBox[i].animate(keyframes, options);
  },137);
}

// タイトルブラーここまで

// レーダーチャートここから
$('#myRadarChart').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
  if (isInView) {
var ctx1 = document.getElementById("myRadarChart");
  var myChart = new Chart(ctx1, {
    type: 'radar',
    data: {
      labels: ["コミュニケーション力", "自己コントロール", "要領の良さ", "積極性", "共感力"],
      datasets: [{
        label: "性格",
        data: [5, 3, 2, 4, 6],
        backgroundColor: "rgba(67, 133, 215, 0.5)",  //グラフ背景色
        borderColor: "rgba(67, 133, 215, 1)",        //グラフボーダー色
      }]
    },
    options: {
      scales: {
        r: {
          max: 7,        //グラフの最大値
          min: 0,        //グラフの最小値
          ticks: {
            stepSize: 1  //目盛間隔
          }
        }
      },
    }
  });
}
}
);


// 横棒グラフ
$('#chart').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
  if (isInView) {
    var ctx = document.getElementById('chart');
    var data = {
      labels: ["HTML", "CSS", "JavaScript", "jQuery", "Python"],
      datasets: [{
          label: '現役エンジニアを10とした自身のスキル',
          data: [7, 6, 4, 6, 3],
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


// スキルバーここまで







// ウェーブここから
var unit = 100,
    canvasList, // キャンバスの配列
    info = {}, // 全キャンバス共通の描画情報
    colorList; // 各キャンバスの色情報

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
		canvasList = [];
    colorList = [];
    // canvas1個めの色指定
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#0ff', '#ff0', '#f00', '#00f', '#f0f']);//重ねる波線の色設定
    // colorList.push(['#0ff', '#ff0', '#f00', '#00f', '#f0f']);//重ねる波線の色設定
    
	
		// 各キャンバスの初期化
		for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
        canvas.height = 200;//波の高さ
        canvas.contextCache = canvas.getContext("2d");
    }
    // 共通の更新処理呼び出し
		update();
}

function update() {
		for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        // 各キャンバスの描画
        draw(canvas, colorList[canvasIndex]);
    }
    // 共通の描画情報の更新
    info.seconds = info.seconds + .014;
    info.t = info.seconds*Math.PI;
    // 自身の再起呼び出し
    setTimeout(update, 35);
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
		// 対象のcanvasのコンテキストを取得
    var context = canvas.contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    //波線を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
    drawWave(canvas, color[0], 0.8, 3, 0);
	drawWave(canvas, color[1], 0.5, 4, 0);
	drawWave(canvas, color[2], 0.3, 1.6, 0);
	drawWave(canvas, color[3], 0.2, 3, 100);
	drawWave(canvas, color[4], 0.5, 1.6, 250);
}

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(canvas, color, alpha, zoom, delay) {
	var context = canvas.contextCache;
    context.strokeStyle = color;//線の色
	context.lineWidth = 1;//線の幅
    context.globalAlpha = alpha;
    context.beginPath(); //パスの開始
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.stroke(); //線
}

/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height/2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();


// 波線ここまで
// パーティクルここから

// particlesJS("particles-js",{
// 	"particles":{
// 		"number":{
// 			"value":100,//この数値を変更するとホタルの数が増減できる
// 			"density":{
// 				"enable":true,
// 				"value_area":1602.3971861905397
// 			}
// 		},
// 		"color":{
// 			"value":"#000"//色
// 		},
// 		"shape":{
// 			"type":"circle",//形状はcircleを指定
// 			"stroke":{
// 				"width":0,
// 			}
// 		},
// 		"opacity":{
// 			"value":1,
// 			"random":true,//透過をランダムに
// 			"anim":{
// 				"enable":false,
// 				"speed":1.10115236356258881,
// 				"opacity_min":0,
// 				"sync":false
// 			}
// 		},
// 		"size":{
// 			"value":4.005992965476349,
// 			"random":true,//サイズをランダムに
// 			"anim":{
// 				"enable":true,
// 				"speed":24.345709068776642,
// 				"size_min":0.1,
// 				"sync":false
// 			}
// 		},
// 		"line_linked":{
// 			"enable":false,
// 		},
// 		"move":{
// 			"enable":true,
// 			"speed":6,//この数値を小さくするとゆっくりな動きになる
// 			"direction":"none",//方向指定なし
// 			"random":true,//動きはランダムに
// 			"straight":false,//動きをとどめない
// 			"out_mode":"out",//画面の外に出るように描写
// 			"bounce":false,//跳ね返りなし
// 			"attract":{
// 				"enable":false,
// 				"rotateX":600,
// 				"rotateY":600
// 			}
// 		}
// 	},
// 	"interactivity":{
// 		"detect_on":"canvas",
// 		"events":{
// 			"onhover":{
// 				"enable":false
// 			},
// 			"onclick":{
// 				"enable":false
// 			},
// 			"resize":true
// 		}
// 	},
// 	"retina_detect":true
// });