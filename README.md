# compornent（共通部品）

## イメージ画像

## 概要

- codepus 模擬案件（mv）
- `swiper@8`を使用 -> 断念。`Swiper@4.5.0`に戻した。
- `cds`はダウンロードを使用。（変更してないので`cdn`でも可能）

- https://www.notion.so/000_web-component-index-c4b399010bf342e9b4e2ed516cf9c730

## 仕様

- スマホファースト
- rem 記述
- ルートフォントを vw で設定していることから PC サイズのレイアウトをタブレットで表示させることが出来ます（rem で書いた場合のみ）。
- xxx

## 注意事項

- xxx

## 使い方

- 「copy start」から「copy end」をコピペ。
- css: src -> module -> xxx をコピペ。

## w3c html チェック結果

- https://validator.w3.org/nu/

## w3c css チェック結果

- https://jigsaw.w3.org/css-validator/

## portfolio url:

- https://c-0058.wtb.cfbx.jp/

## 参考にしたサイト

- 再生を無限に繰り返すには
- https://techacademy.jp/magazine/25592
- Swiper の effect: fade でスライドが重なる
- https://zenn.dev/ytk6565/articles/swiper-effect-fade
- 3.画像がズームしながらフェードアウトで切り替わる
- https://web-den.com/use-swiper
- Swiper+CSS のみ！ズームアップしながらフェードインで切り替わるスライダーの実装方法
- https://wemo.tech/2961
- Swiper+CSS のみ！ズームアップしながらフェードインで切り替わるスライダーの実装方法
- https://wemo.tech/2961

## 更新履歴

- 2022/4/20 結局、前回の気になる点が解消できず。`swiper@8`を使用 -> 断念。`Swiper@4.5.0`に戻した。
- 2022/4/19 sp、pc 動くようになったが、３枚目が fadeout するときに一瞬小さくなる動きが気になる。
- 2022/4/18 codepus 模擬案件（mv）作成開始

## 環境・使い方

- ダウンロードしたフォルダを開く。
- ターミナルを開き、 npm i とコマンドを入力する。
- node_modules と package-lock.json が生成されるのを確認する。
- 「 npx gulp 」とコマンドを入力すると動き出します。

## 備考
