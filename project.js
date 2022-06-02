let b = document.querySelector('#print');
b.addEventListener('click', greeting);

let thanneru;
let bangumi;

function greeting() {
let i = document.querySelectorAll('input[name="a"]');

for (let r of i) {
    if (r.checked) {       
        thanneru = r.value;
    }
}

let n = document.querySelectorAll('input[name="b"]');
for (let l of n) {
    if (l.checked) {        
        bangumi = l.value;
    }
}

let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + thanneru + '-' + bangumi + '-j.json';
axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);
}
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    if(thanneru === "g1") {
        for (let n of data.list.g1) {
            console.log(n.title);
            
          }
    } else {
        for (let m of data.list.e1) {
            console.log(m.title);
        }
    }
    
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}