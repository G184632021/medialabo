// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let b = document.querySelector('#print');
b.addEventListener('click', hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let i = document.querySelector('input[name="num"]');       // 第5回課題:テキストボックスの数値をここに代入
    let num = i.value;
    let yoso = Math.floor(num);

        let pre = (kaisu + "回目の予想: " + yoso);
        let s = document.querySelector('span#pre');
        s.textContent = pre;


    if(kaisu !== kotae && kaisu === 3) {
        let ans = ("まちがい.残念でした答えは " + kotae + "です.");
    } else if (kaisu >= 4) { 
        ans = ("答えは " + kotae + "でした. すでにゲームは終わっています.");
    } else if (kotae === yoso) {
        ans = ("正解です.おめでとう!");
    } else if(kotae > yoso) {
        ans = ("まちがい．答えはもっと大きいですよ.");
    } else {
        ans = ("まちがい．答えはもっと小さいですよ.");
    }
    let d = document.querySelector('span#ans');
    d.textContent = ans;
    kaisu++;
}


    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること


/*let s = document.querySelector('span#kaisu');
s.textContent = kaisu;
let t = document.querySelector('span#yoso');
t.textContent = yoso;
let k = document.querySelector('span#kotae');
k.textContent = kotae;
*/