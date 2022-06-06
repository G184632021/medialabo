let b = document.querySelector('button#print');
b.addEventListener('click', Request);

let kaisu = 0;
//let tyanneru;
//let bangumi;

function Request() {
let b = document.querySelectorAll('input[name="b"]');
let c = document.querySelectorAll('input[name="a"]');
let tyanneru = b.value;
let bangumi = c.value;

/*for (let r of c) {
    if (r.checked) {       
        tyanneru = r.value;
    }
}

let b = document.querySelectorAll('input[name="b"]');
for (let l of b) {
    if (l.checked) {        
        bangumi = l.value;
    }
}
*/

let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + tyanneru + '-' + bangumi + '-j.json';
axios.get(url)
        .then(kensaku)   
        .catch(showError)   
        .then(finish);
}

function kensaku(resp) {
    let b = document.querySelector('input[name="b"]');
    let tyanneru = b.value;
    let data = resp.data;
    if (kaisu > 0) {
        let table1 = document.querySelectorAll('table')
        table1.remove()
    }
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    let table, tr1,th1,th2,th3,th4,tr2,th;
    let mi = ['番組名','サブタイトル','出演者','番組説明文'];
    let ul = document.querySelector('ul');
    
    //for (let x of data.list){

        if (tyanneru === 'g1') {
            if (data.list === null) {
                let p = document.createElement('p');
                p.textContent = "そのジャンルの番組はありません。";
                ul.insertAdjacentElement('afterend' , p);
            } else {
                let o = data.list.g1;

        for (let i = 0; i < o.length; i++) {
    table = document.createElement('table');
    ul.insertAdjacentElement('afterend' , table);
    tr2 = document.createElement('tr');
    table.insertAdjacentElement('beforeend' , tr2);

    for (let x of mi) {
        th = document.createElement('th');
        th.textContent = x;
        tr2.insertAdjacentElement('beforeend' , th);
    }

    tr1 = document.createElement('tr');
    table.insertAdjacentElement('beforeend' , tr1);
    th1 = document.createElement('th')
    th1.textContent = o[i].title;
    tr1.insertAdjacentElement('beforeend' , th1)
    th2 = document.createElement('th')
    th2.textContent = o[i].subtitle;
    tr1.insertAdjacentElement('beforeend' , th2)
    th3 = document.createElement('th')
    th3.textContent = o[i].act;
    tr1.insertAdjacentElement('beforeend' , th3)
    th4 = document.createElement('th')
    th4.textContent = o[i].content;
    tr1.insertAdjacentElement('beforeend' , th4)
}
}
}
else if (tyanneru === 'e1') {
    if(data.list === null){
        let p = document.createElement('p');
        p.textContent = "そのジャンルの番組はありません。";
        ul.insertAdjacentElement('afterend' , p);
    } 
    else {
        let o = data.list.e1;
    for (let i = 0; i < o.length; i++) {
        let ul = document.querySelector('ul');
table = document.createElement('table');
ul.insertAdjacentElement('afterend' , table);
tr2 = document.createElement('tr');
table.insertAdjacentElement('beforeend' , tr2);

for (let x of mi) {
    th = document.createElement('th');
    th.textContent = x;
    tr2.insertAdjacentElement('beforeend' , th)
}

tr1 = document.createElement('tr');
table.insertAdjacentElement('beforeend' , tr1);
th1 = document.createElement('th')
th1.textContent = o[i].title;
tr1.insertAdjacentElement('beforeend' , th1)
th2 = document.createElement('th')
th2.textContent = o[i].subtitle;
tr1.insertAdjacentElement('beforeend' , th2)
th3 = document.createElement('th')
th3.textContent = o[i].act;
tr1.insertAdjacentElement('beforeend' , th3)
th4 = document.createElement('th')
th4.textContent = o[i].content;
tr1.insertAdjacentElement('beforeend' , th4)
  }
}
}
}

function showError(err) {
    console.log(err);
}

function finish() {
    console.log('Ajax 通信が終わりました');
    kaisu = kaisu + 1; 
}
    
 /*   if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    if(thanneru === "g1") {
        for (let n of data.list.g1) {
            console.log(n.title);
            let p = document.createElement('p');
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
*/