# vue-output-test

Vueアウトプットサンプル

composition apiのみの状態管理でTodoリストの基本的な機能を構築
→ ロジック部分を分割

上記の構成に対し、テストを実施

urlはこちら

- https://yukionishi1129.github.io/vue-output-test

## 目次

1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install
```

### 1-2. アプリケーション実行

```
npm run dev
```

## 2. アプリケーションの仕様

### 2-1. 仕様

- Todoリスト
  - Todo一覧表示
  - Todo検索処理
  - Todo新規登録処理
  - Todo削除処理

### 2-2. 構成技術

- vue: 3.5.10
- vite: 5.4.8
- @fortawesome/fontawesome-svg-core: 6.6.0
- @fortawesome/free-brands-svg-icons: 6.6.0
- @fortawesome/free-regular-svg-icons: 6.6.0
- @fortawesome/free-solid-svg-icons: 6.6.0
- @fortawesome/vue-fontawesome: 3.0.8
