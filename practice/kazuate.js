// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    for (let i = 1; i < 10; i++) {
        kaisu = kaisu + 1;
    console.log(kaisu + "回目の予想: " +yoso);// 課題3-1：ここの判定処理を作成する．

    if (4 === yoso) {
        console.log("正解です.おめでとう!");
    } else if(4 > yoso) {
        console.log("まちがい．答えはもっと大きいですよ");
    } else {
        console.log("まちがい．答えはもっと小さいですよ");
    }

}
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
}
