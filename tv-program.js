let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

/////////////////// 課題3-2 はここから書き始めよう
/*for (let n of data.list.g1) {
  console.log(n.title);
}
*/

let b = document.querySelector('button#print');
b.addEventListener('click', greeting);

let kaisu = 0;
let tyanneru;
let bangumi;

function greeting() {
let b = document.querySelectorAll('input[name="b"]');
let c = document.querySelectorAll('input[name="a"]');
let tyanneru = b.value;



let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + tyanneru + '-' + bangumi + '-j.json';
axios.get(url)
        .then(kensaku)   
        .catch(showError)   
        .then(finish);
}

function kensaku(resp) {
    let b = document.querySelectorAll('input[name="b"]');
    let tyanneru = b.value;
    let data = resp.data;
    if (kaisu > 0) {
        let table = document.querySelectorAll('table')
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
                th1.textContent = x[i].title;
                tr1.insertAdjacentElement('beforeend' , th1)
                th2 = document.createElement('th')
                th2.textContent = x[i].subtitle;
                tr1.insertAdjacentElement('beforeend' , th2)
                th3 = document.createElement('th')
                th3.textContent = x[i].act;
                tr1.insertAdjacentElement('beforeend' , th3)
                th4 = document.createElement('th')
                th4.textContent = x[i].content;
                tr1.insertAdjacentElement('beforeend' , th4)
            }
        }
    } else if (tyanneru === 'e1') {
        if(data.list === null){
            let p = document.createElement('p');
            p.textContent = "そのジャンルの番組はありません。";
            ul.insertAdjacentElement('afterend' , p);
        } else {
            let o = data.list.e1;
            for (let i = 0; i < o.length; i++) {
                let ul = document.querySelector('ul');
                table = document.createElement('table');
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
                th1.textContent = x[i].title;
                tr1.insertAdjacentElement('beforeend' , th1)
                th2 = document.createElement('th')
                th2.textContent = x[i].subtitle;
                tr1.insertAdjacentElement('beforeend' , th2)
                th3 = document.createElement('th')
                th3.textContent = x[i].act;
                tr1.insertAdjacentElement('beforeend' , th3)
                th4 = document.createElement('th')
                th4.textContent = x[i].content;
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
    
 