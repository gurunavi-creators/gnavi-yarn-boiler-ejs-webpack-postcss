# yarn-boiler-ejs-webpack-postcss

- yarn-boiler-ejs-webpack-postcssリポジトリ


# package

## package installed

- [package.jsonを参照](package.json)


# config

## install

### clone

    git clone https://github.com/gurunavi-creators/gnavi-yarn-boiler-ejs-webpack-postcss.git

### change directory

    cd gnavi-yarn-boiler-ejs-webpack-postcss

### 動作環境

```sh
$ yarn -v
1.10.1
```

### install

```sh
$ yarn install
```

### build

```sh
$ yarn build
```
    ビルドします。

## watch command

```sh
$ yarn builwatchd
```
    browserSyncでブラウザ確認できます。
    <http://localhost:3000/>でローカル確認


# ルートディレクトリ構成

    bin/ : ビルド・デプロイシェル
    dist/ : 出力ディレクトリ
    src/ : 開発ディレクトリ
    .editorconfig
    .eslintrc
    .gitignore
    .node-version
    Makefile
    postcss.config.js
    webpack.config.js
    package.json
    README.md


# 開発ディレクトリ構成

編集対象は src/ 以下のみ

    src/
      └ css/ : 画像
        └ foundation/ : foundation
        └ layout/ : layout
        └ object/ : object
          └ component/ : component
          └ project/ : project
          └ utility/ : utility
        └ page/ : page
      └ ejs/ : ejs
      └ img/ : 画像
      └ js/
        └ modules/
        └ common.js
      └ svg/ : 画像


# CSS開発方針

+ FLOCSS
https://github.com/hiloki/flocss

## セレクター命名方針

- [MindBEMding](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
