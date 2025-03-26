 テーマ「site」2023/09/26版
====================================

------------------------------------
 テーマフォルダ直下のテンプレート
------------------------------------
■ _entry.html
詳細ページのテンプレートです。

■ _top.html
トップページのテンプレートです。

■ 404.html
404ページで表示されるテンプレートです。

■ admin.html
管理ページで読み込まれるテンプレートです。

■ base.html
ベースとなるパーツを集めたテンプレートです。

■ index.html
一覧ページのテンプレートです。

■ layout.html
レイアウト機能が実装されたテンプレートです。

■ search.html
キーワード検索時に使用されるテンプレートです。

■ template.yaml
siteテーマを選択したときに、テンプレートをまとめて設定できるファイルです。使用するかどうかは管理画面＞テーマ＞テーマ設定 にて変更できます。

■ thanks.html
動的フォームのフォームの終了画面です。



------------------------------------
フォルダ構成
------------------------------------
■ admin
siteテーマオリジナルの管理画面のテンプレートが入ったフォルダ。
siteテーマでは主に以下のテンプレートが入っています。
・ カスタムフィールド（ブログ・カテゴリー・エントリー・モジュール）
・ レイアウト機能
・ ダッシュボード

■ カテゴリーコード名フォルダ
a-blog cmsで作ったカテゴリーと同じコード名でフォルダを作ると、その中にあるindex.htmlと_entry.htmlはそのカテゴリーの専用テンプレートとなります。
siteテーマでは以下のカテゴリー名フォルダを用意しています。
・ contact（お問い合わせ）
・ news（お知らせ）
・ products（製品情報）
・ realestate（物件情報）

■ dest
siteテーマで使っているCSSが入ったフォルダです。

■ images
siteテーマで使っている画像が入ったフォルダです

■ include
siteテーマ内のインクルードしているテンプレートをまとめたフォルダです。

■ js
siteテーマで使っているJavaScriptが入ったフォルダです。

■ _layouts
テンプレートの継承機能で使用するファイルが入ったフォルダです。
用途としては、主に別テンプレートでレイアウトを統一するために使います。

■ src/scss
siteテーマで使っているSCSSファイルが入っているフォルダです。このscssフォルダに入っているSCSSファイルをコンパイルしてCSSを出力しています。


------------------------------------
 利用している a-blog cms の基本機能
------------------------------------
■ 用意しているカスタムフィールド

ブログ
・ サイトの設定（BID1のみ）
・ SEOの設定
・ OGPの設定
・ 会社情報（BID1のみ）
・ SNSアカウントの情報（BID1のみ）
・ アクセス解析（BID1のみ）

カテゴリー
・ SEOの設定
・ OGPの設定
・ ページタイトルの設定
・ 一覧ページで表示している地図の設定（※ 物件情報のみ）


エントリー
・ ピックアップのチェックボックス
・ 物件情報でカスタムフィールド検索のサンプル（※ 物件情報のみ）
・ スタッフ紹介でカスタムフィールドグループのサンプル（※ 会社概要のみ）

モジュール
・ 見出しの設定
・ 見出し横に表示するアイコンの設定
・ カスタムフィールドグループ（モジュールID「MF_about_service」のみ）
・ カスタムフィールドグループ（モジュールID「MF_main_visual」のみ）


■ フォーム
・ 検索フォーム
・ お問い合わせフォーム（お問い合わせページ）
・ 採用情報の営業職のページに動的フォーム（※ 管理画面から動的フォームを有効にする設定が必要です。管理ページ＞コンフィグ＞機能設定のページの「動的フォーム」をチェックして有効にすると使用可）

■ エントリーの固定表示
エントリー編集ページの詳細設定の中にあるファイル名の入力欄を空にすると、エントリーが固定表示される機能。会社概要のページで実装しています。

■ カスタムフィールドを使った指定した記事のピックアップ表示
・ サイドカラムのピックアップリストで実装。あらかじめ各エントリーにカスタムフィールドを実装し、管理画面のモジュールの「フィールド」の設定にて、条件を絞り込んで一致したエントリーを表示しています。


------------------------------------
 行っているカスタマイズについて
------------------------------------
■ スライダーについて
スライダーはslickというjQueryプラグインを使用しています。使用方法に着いてはslickの公式サイトをご覧ください。
　・ slick / https://kenwheeler.github.io/slick/
モジュールに登録された画像は背景画像として使用され、テキストはCMS上で変更できます。

■ レイアウト機能
レイアウト機能は /themes/site/layout.html でご利用できます。レイアウト機能をトップページでご利用になるときはlayout.htmlをtop.htmlにリネームしてください。

■ カスタムユニット
カスタムユニットを使い、ユニットの追加に「製品スペック」のボタンを追加しています。管理画面＞コンフィグ＞編集設定のページにある「ユニット追加ボタン」、管理画面＞コンフィグ＞ユニット
　・ /themes/site/include/unit/custom.html
　・ /themes/site/admin/entry/unit/custom.html

■ Cookie機能を使用したコンテンツの切り替え
/themes/site/include/head/js.html に製品情報の子カテゴリーのページにアクセスしたときにCookieが適用される記述があります。さらに、ルール機能でバナーモジュールの画像を変更しています。

■ メインカラムとサイドカラムの余白について
メインカラムとサイドカラムの余白は大きくなっており、余白の方向を調整したいときは「.main-inner」に適用するクラス名を調整してください。
適用できるクラス名は以下の3つです。
・.is-space-right
・.is-space-left
・.is-space-center
余白を右側につけたいときは「.is-space-right」、余白を左側につけたいときは「.is-space-left」を「.main-inner」に適用してください。
中央寄せにしたいときは「.is-center」を適用します。
デフォルトでは「.is-space-right」が適用されています。


■ EU購入者のためのデータ収集の有効化
2018年よりEUにて一般データ保護規則（GDPR）が制定され、欧州に在住している方の個人情報を取得するためにはウェブサイト訪問者の事前同意が必要となりました。
必要であれば、機能をオンにしてください。
そこで、Siteテーマでは容易に導入できるように事前に仕組みを導入しています（デフォルトはオフです）。

▼ 主な関連するファイル
・/include/body-start.html
・/include/body-start/cookie-consent.html
・/src/scss/cookie-consent.scss
・/admin/blog/field-script.html

▼ 使用しているJSプラグイン
vanilla-cookieconsent
https://www.npmjs.com/package/vanilla-cookieconsent

▼ 基本的な使い方
1. 管理画面＞ブログ管理の順にページを移動し、「EU購入者のためのデータ収集の有効化」を有効化する（有効化すると、/include/body-start.htmlに記述されている/include/body-start/cookie-consent.htmlが読み込まれます）
2. クッキーを使用しているJavaScriptのscript要素にtype="text/plain"とdata-cookiecategory="<category>"を追記してください（<category>にはcookie-consent.htmlのtoggleオブジェクトのvalueプロパティと同じ値を設定します）
3. /include/body-start/cookie-consent.html に制御したいカテゴリーをtoggleオブジェクトのvalueプロパティに追加します

▼ 製品情報のCookieの出しわけ機能に適用する
管理画面＞ブログ管理の順にページを移動し、「EU購入者のためのデータ収集の有効化」を有効化する。
有効化した時点で、製品情報ページで使用しているCookieによるコンテンツの出しわけ機能は閲覧者から同意を得てから実行されるようになります。
（※製品情報のCookieの出しわけのJavaScript自体は/include/head/js.htmlに記述されています）

▼ GAに適用する
管理画面＞ブログ管理のページで、Google Analyticsを設定します。
クッキーの同意ポップアップを使用する際は、script要素にtype="text/plain"とdata-cookiecategory="<category>"を追記してください（<category>にはcookie-consent.htmlのtoggleオブジェクトのvalueプロパティと同じ値を設定します）
あらかじめ、通常であればテンプレートに記述しますが、cookie-consent.htmlでanalyticsカテゴリーが事前に設定されているので、以下のようにカスタムフィールドに設定します。

記述例）管理画面＞ブログ管理のページで、Google Analyticsを設定する
```
<!-- Global site tag (gtag.js) - Google Analytics -->
<script type="text/plain" data-cookiecategory="analytics" async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script type="text/plain" data-cookiecategory="analytics">
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

▼ スタイルを修正したい
スタイルを修正したい場合には、dest/bundle.css または /src/scss/cookie-consent.scss を使って修正してください。

▼ 文言を修正したい
文言を修正する時は、/include/body-start/cookie-consent.htmlに書かれているJavaScriptの部分を修正します。
言語ごとのオブジェクトを増やせば多言語対応することも可能です。

▼ 訪問者がいつでも設定を変更できるようにする
以下のボタンをページ内のどこかに設置すれば、いつでも訪問者が設定を変更できます。
```
<a href="javascript:void(0);" aria-label="View cookie settings" data-cc="c-settings">Cookie Settings</a>
```

▼ 規約を変更したので再度モーダルを表示したい
規約を変更した場合は、revisionプロパティの値を変更することで、再度訪問者にポップアップを表示することが可能です。
