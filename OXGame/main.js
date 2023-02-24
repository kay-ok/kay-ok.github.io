// 先攻のマーク
const FIRST_MARK = 'O';

// 後攻のマーク
const NEXT_MARK = 'X';

// ターン数
let count = 1;

// マス目のIDリスト
const IDS = [
  ['b1', 'b2', 'b3'],
  ['b4', 'b5', 'b6'],
  ['b7', 'b8', 'b9']
];

// ゲーム実行中のフラグ
let isRun = true;

// (id)を受け取って対応するオブジェクトを返す
function $(id) {
  return document.getElementById(id);
}

// 先攻のターンかどうかを判定する
function isFirstMove() {
  let isFirst = count % 2;
  return isFirst == 1;
}

// ターン表示を切り替える
function changeDisplayCount() {
  if (isFirstMove()) {
    // 先攻のターン
    $('display-count').innerHTML = FIRST_MARK + 'の番です'
  } else {
    // 後攻のターン
    $('display-count').innerHTML = NEXT_MARK + 'の番です'
  }
}

// 試合終了を判定する
function judgeEnd() {
  let isEnd = false;

  // 横3マスが同じマークかを判定する
  for (let row = 0; row < 3; row++) {
    // 勝敗を判定する
    isEnd = isWin(IDS[row][0], IDS[row][1], IDS[row][2]);
    if (isEnd) {
      displayResult($(IDS[row][0]).value + 'の勝ち！');
      return true;
    }
  }
  // 盾3マスが同じマークかを判定する
  for (let col = 0; col < 3; col++) {
    isEnd = isWin(IDS[0][col], IDS[1][col], IDS[2][col]);
    if (isEnd) {
      displayResult($(IDS[0][cal]).value + 'の勝ち！');
      return true;
    }
  }
  // 斜め3マスが同じマークかを判定する（右下がり）
  isEnd = isWin(IDS[0][0], IDS[1][1], IDS[2][2]);
  if (isEnd) {
    displayResult($(IDS[0][0]).value + 'の勝ち！');
    return true;
  }
  // 斜め3マスが同じマークかを判定する（左下がり）
  isEnd = isWin(IDS[0][2], IDS[1][1], IDS[2][0]);
  if (isEnd) {
    displayResult($(IDS[0][2]).value + 'の勝ち！');
    return true;
  }

  // 引き分けの判定(全てのマスが埋まった時)
  if (9 <= count) {
    displayResult('引き分け！');
    return true;
  }

  // ゲームが続行する場合はfalseを返す
  return false;
}


// 勝敗を判定する
function isWin(firstId, secondId, thirdId) {
  // 一つ目のマス目が空の場合は終了する
  if ($(firstId).value == '') {
    return false;
  }
  // 2つ目のマス目がからの場合は終了する
  if ($(secondId).value == '') {
    return false;
  }
  // 3つ目のマス目がからの場合は終了する
  if ($(thirdId).value == '') {
    return false;
  }
  // 3つ目のマス目が同じマークである場合は勝利
  if (($(firstId).value == $(secondId).value)
      && ($(secondId).value == $(thirdId).value)
  ) {
    return true;
  }
  // 3つ目のマス目が同じマークでない場合は勝利ではない

  return false;
}

// 勝利の結果を表示する
function displayResult(message) {
  $('display-result').innerHTML = message;
  isRun = false;

  // もう一度遊ぶボタンを表示する
  $('reset').style.display = '';
}

//クリックされた時の処理
function clickAction(event) {
  // ゲーム実行中でなければ何もせずに終了
  if (!isRun) {
    return;
  }
  // イベントからクリックされたマス目のIDを取得する
  let id = event.target.id;
  // IDからオブフェクトを取得する
  let object = $(id);
  // すでにマークが設定されている場合はスキップ
  if (object.value !== '') {
    return;
  }
  // オブジェクト（マス目）にマークを設定する
  if (isFirstMove()) {
    object.value = FIRST_MARK;
  } else {
    object.value = NEXT_MARK;
  }

  // ゲーム終了を判定する
  if (judgeEnd()) {
    return;
  }
  
  // ターンを＋1する
  count = count + 1;

  // ターン表示を切り替える
  changeDisplayCount();
}

// もう一度遊ぶボタンが押された場合の処理
function resetAction() {
  // ターンを1に戻す
  count = 1;
  changeDisplayCount();
  
  // マス目をからにする
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      $(IDS[row][col]).value = ''
    }
  }
  // 結果の表示をリセットする
  displayResult('');
  // ゲームを実行中に戻す
  isRun = true;

  // もう一度遊ぶボタンを非表示にする
  $('reset').style.display = 'none';
}



// 画面を読み込んだ時の処理
function onloadAction() {
  // マス目にイベントを設定する
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      $(IDS[row][col]).onclick = clickAction;
    }
  }
  // もう一度遊ぶボタンにイベントを設定する
  $('reset').onclick = resetAction;

  // リセットアクションを実行
  resetAction();
}

// 画面読み込み時のイベントを設定
window.onload = onloadAction;

