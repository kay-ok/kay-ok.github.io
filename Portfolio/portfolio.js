
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
      labels: ["コミュニケーション力 [8]", "自己コントロール [4]", "要領の良さ [2]", "几帳面 [7]", "積極性 [8]", "共感力 [9]"],
      datasets: [{
        label: "性格",
        data: [8, 4, 2, 7, 8, 9],
        backgroundColor: "rgba(67, 133, 215, 0.35)",  //初期グラフ背景色
        borderColor: "rgba(67, 133, 215, 1)",        //グラフボーダー色
        pointBackgroundColor: "rgba(255, 255, 255, 0.1)",
        pointBorderColor: "rgba(255, 255, 255, 0.1)",
        lintTension: 0
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        r: {
          max: 10,
          min: 0,
          pointLabels: {
            font: {
              size: 10.5
            }
          },
          ticks: {
            stepSize: 1,
          },
          angleLines: {
            color: 'green',
          },
          pointBorderColor: {
            color: 'rgba(0, 0, 0, 0.1)',
          },
        },
      },

    },
  });
}
}
);


// 横棒グラフ
$('#chart').on('inview', function(event, isInView) {
  if (isInView) {
    var ctx = document.getElementById('chart');
    var data = {
      labels: ["HTML", "CSS", "JavaScript", "jQuery", "Other"],
      datasets: [{
          label: '現役エンジニアを10とした自身のスキル',
          data: [8, 7, 4, 7, 3],
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


var unit = 100,
    canvasList,
    info = {},
    colorList;


function init() {
    info.seconds = 0;
    info.t = 0;
    canvasList = [];
    colorList = [];

    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#0ff', '#ff0', '#fff', '#00f', '#ff99cc']);
    

    canvasList.push(document.getElementById("waveCanvas2"));
    colorList.push(['#43c0e4']);
    

    canvasList.push(document.getElementById("waveCanvas3"));
    colorList.push(['#cc99ff']);

  
    for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
        canvas.height = 200;//波の高さ
        canvas.contextCache = canvas.getContext("2d");
    }

    update();
}

function update() {
    for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        draw(canvas, colorList[canvasIndex]);
    }

    info.seconds = info.seconds + .014;
    info.t = info.seconds*Math.PI;

    setTimeout(update, 35);
}


function draw(canvas, color) {
    var context = canvas.contextCache;
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawWave(canvas, color[0], 0.8, 3, 0);
    drawWave(canvas, color[1], 0.5, 4, 0);
    drawWave(canvas, color[2], 0.3, 1.6, 0);
    drawWave(canvas, color[3], 0.2, 3, 100);
    drawWave(canvas, color[4], 0.8, 2, 0);
}


function drawWave(canvas, color, alpha, zoom, delay) {
  var context = canvas.contextCache;
    context.strokeStyle = color;
  context.lineWidth = 1;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.stroke();
}


function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height/2);
    var yAxis = 0;
    var context = canvas.contextCache;
    var x = t;
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis);


    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();