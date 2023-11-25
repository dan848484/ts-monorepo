# ts-monorepo

TypeScript でサクっとコードを動かしたいときに使用する TypeScript 環境モノレポです。

## 使用しているツール

- nx

# 実行

競技プログラミングなどのコーディングでファイル変更時に実行するには以下のようにしてください。

(stdin.txt の内容が毎回、標準入力として与えられます。)

```
pnpm nx start watcher apps/atcoder/src/typical90/001/main.ts
```
