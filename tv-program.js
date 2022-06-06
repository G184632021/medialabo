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
for (let n of data.list.g1) {
  console.log(n.title);
}


/*
<!DOCTYPE html>
<html>
    <head>
        <script src="tv-program.js"></script>
        <link rel="stylesheet" href="style2.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js"></script>
        <script src="project.js" defer></script>
        <meta charset="utf-8">
        <teitle><h1>NHK の番組表</h1></teitle>

    </head>

        <body>
            <div>
                <label for="shimei">チャンネル: </label>
                <input type="radio" id="contactChoice1"
                name="a" value="g1">
                <label for="contactChoice1">g1(NHK総合1)</label>
                <input type="radio" id="contactChoice1"
                name="a" value="e1">
                <label for="contactChoice1">e1(Eテレ1)</label>
            </div>
            
            <div>
                <label for="shimei">番組: </label>
                <input type="radio" id="a"
                name="b" value="0000">
                <label for="contactChoice1">0000</label>
                <input type="radio" id="a"
                name="b" value="0100">
                <label for="contactChoice1">0100</label>
                <input type="radio" id="a"
                name="b" value="0205">
                <label for="contactChoice1">0205</label>
                <input type="radio" id="a"
                name="b" value="0300">
                <label for="contactChoice1">0300</label>
                <input type="radio" id="a"
                name="b" value="0409">
                <label for="contactChoice1">0409</label>
                <input type="radio" id="a"
                name="b" value="0502">
                <label for="contactChoice1">0502</label>
                <input type="radio" id="a"
                name="b" value="0600">
                <label for="contactChoice1">0600</label>
                <input type="radio" id="a"
                name="b" value="0700">
                <label for="contactChoice1">0700</label>
                <input type="radio" id="a"
                name="b" value="0800">
                <label for="contactChoice1">0800</label>
                <input type="radio" id="a"
                name="b" value="0903">
                <label for="contactChoice1">0903</label>
                <input type="radio" id="a"
                name="b" value="1000">
                <label for="contactChoice1">1000</label>
                <input type="radio" id="a"
                name="b" value="1100">
                <label for="contactChoice1">1100</label>
            </div>


            <button id="print">表示</button>

            

        <table>
            <link href="style2.css" rel="stylesheet" type="text/css">
            <tr>
                <th>項目名</th>
                <th>項目名の説明</th>
                <th colspan="2">番号 → ジャンル</th>
            </tr>
            <tr>
                <td>start_time</td>
                <td>番組開始時刻</td>
                <td colspan="2">0000 → ニュース・報道</td>
            </tr>
            <tr>
                <td>end_time</td>
                <td>番組終了時刻</td>
                <td colspan="2">0100 → スポーツ</td>
            </tr>
            <tr>
                <td>service.name</td>
                <td>チャンネル</td>
                <td colspan="2">0205 → 情報・ワイドショー</td>
            </tr>
            <tr>
                <td>title</td>
                <td>番組名</td>
                <td colspan="2">0300 → ドラマ</td>
            </tr>
            <tr>
                <td>subtitle</td>
                <td>番組サブタイトル</td>
                <td colspan="2">0409 → 音楽</td>
            </tr>
            <tr>
                <td>content</td>
                <td>番組説明文</td>
                <td colspan="2">0502 → バラエティ</td>
            </tr>
            <tr>
                <td>act</td>
                <td>出演者</td>
                <td colspan="2">0600 → 映画</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td colspan="2">0700 → アニメ</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td colspan="2">0800 → ドキュメンタリー・教養</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td colspan="2">0903 → 劇場・公演</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td colspan="2">1000 → 趣味・教育</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td colspan="2">1100 → 福祉</td>
            </tr>

            

        </table>


        </body>
    


</html>

*/