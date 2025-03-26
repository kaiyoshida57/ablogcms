テーマ「blog」2020/07/29版

■ テーマで読み込まれていないincludeファイル
- thumbnail.htmlはエントリー一覧を大きめの画像付きで表示するテンプレートです。エントリーの一覧を出したい時などに使用されることを想定しています。
- entry-list.htmlは画像のないエントリー一覧を表示するテンプレートです。エントリーをリストのように表示させたい時などに使用されることを想定しています。

ご使用の際はモジュールIDを指定してください。


■ コメント機能
コメント機能を有効にした場合は、
_entry.html内 に /admin/comment/edit.html と /include/comment.html を読み込んでください。


■ 管理ページ > コンフィグで直接設定されているモジュール
■■ Entry_Body のおすすめ設定
サイズ：178×100
トリミング：チェック
フィールド基本設定 ユーザー情報：チェック
　　　　　　　　　 ブログ情報　：チェック
カスタムフィールド ユーザーフィールド：チェック
　　　　　　　　　 ブログフィールド　：チェック

■■ Entry_Tagrelational のおすすめ設定
表示件数：8
ループ内クラス：acms-col-6 acms-col-sm-4 acms-col-md-3
ノーイメージ：チェック
サイズ：178×100（16:9で指定）
トリミング：チェック
フィールド基本設定 ブログ情報：チェック
カスタムフィールド ブログフィールド：チェック

■■ Links のおすすめ設定
トップ　%{HTTP_ROOT}
このブログについて　/about.html
を設定し、about.html というエントリーがなければ作成する。


■ entry-body-index.html
<div class="summary"> に下記のようにクラス名を追加することで、見せ方を変更することができます。
・summary is-thumbnail-1column ...  1カラムで表示します。概要文あり。
・summary is-thumbnail-2column ... 2カラムで表示します。概要文なし。
・summary ... PCでの見せ方に寄せたデザインです。概要文なし。

クラス名を以下のようにすることで、スマートフォン幅の時の見せ方を変更することができます。
・summary is-thumbnail-1column-sp ...  1カラムで表示します。概要文あり。
・summary is-thumbnail-2column-sp ... 2カラムで表示します。概要文なし。


■AMPテンプレートについて
blogテーマではAMPテンプレートが同梱されています。

■■ 関連ファイル
- /_layouts/amp.html
- /amp.html
- /include/amp/
- /include/head/amp-meta.html
- /include/head/amp-twitter-card.html
- /include/unit-amp.html

■■ AMPテンプレートの開発方法について
AMPページは詳細ページのURLの末尾に「/tpl/amp.html」と記述することで確認できます。

さらにAMPの開発時はURL末尾に「#development=1」をつけ開発します。
開発をする際はログアウトして確認してください。

ログインしたままだと編集画面用の組み込みJSが動作し、
コンソールにエラーが表示され、正しくデバッグできません。

サイトを本番運用する際も、組み込みJSが読み込まれてしまうので、
必ずデバッグモードをオフにしてください。

■■ ユニットのソースコードを変更するまたは追加したい場合
ユニットのコードを変更する場合は、/include/unit-amp.html に既存の@sectionブロック（テンプレートの継承機能）を上書きしてください。
追加したい場合は、@section(extend-unit)を上書きし、拡張ユニットのインクルードファイルを新しいものに上書きしてください。
新しいファイルの中で、拡張ユニットの記述をしてください。

例）サンプルコード（/include/unit/hogehoge.htmlを新しい拡張ユニットのインクルードファイルとして使う場合）
```
@section(extend-unit)
@include("/include/unit/hogehoge.html")
@endsection
```
