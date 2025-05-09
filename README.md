# Nuxt 3とPiniaを使用したTodoアプリ

Nuxt 3を使用し、状態管理にPinia、TypeScriptで構築されたシンプルなTodoアプリケーションです。

## 機能

- 新しいタスクの追加
- タスクの削除
- タスクの完了マーク
- 完了したタスクのクリア
- 永続的なTodo（localStorageに保存）
- レスポンシブデザイン

## 技術スタック

- [Nuxt 3](https://nuxt.com/) - 直感的なVueフレームワーク
- [Vue 3](https://vuejs.org/) - プログレッシブJavaScriptフレームワーク
- [Pinia](https://pinia.vuejs.org/) - 使いやすいVueストア
- [TypeScript](https://www.typescriptlang.org/) - 型構文を持つJavaScript

## 前提条件

Node.jsがインストールされていることを確認してください（バージョン16以上推奨）。

## セットアップ

1. このリポジトリをクローンします：
```bash
git clone https://github.com/honggipyo/todo-app-nuxt3-pinia.git
cd todo-app-nuxt3-pinia
```

2. 依存関係をインストールします：
```bash
npm install
```

3. 開発サーバーを実行します：
```bash
npm run dev
```

4. ブラウザを開き、以下のURLにアクセスします：
```
http://localhost:3000
```

## 本番用ビルド

```bash
npm run build
```

ローカルで本番ビルドをプレビューする：
```bash
npm run preview
```

## プロジェクト構造

- `components/` - Vueコンポーネント
  - `Todo.vue` - メインTodoコンポーネント
  - `TodoForm.vue` - 新しいTodoを追加するためのコンポーネント
  - `TodoItem.vue` - 単一のTodoアイテムを表すコンポーネント
  - `TodoList.vue` - Todoリストを表示するコンポーネント
- `stores/` - Piniaストア
  - `todoStore.ts` - Todo状態管理用のストア
- `types/` - TypeScript型定義
  - `todo.ts` - Todo インターフェース定義
