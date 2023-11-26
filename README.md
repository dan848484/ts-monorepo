# ts-monorepo

TypeScript でサクっとコードを動かしたいときに使用する TypeScript 環境モノレポです。

## 使用しているツール

- nx

# 実行

競技プログラミングなどのコーディングでファイル変更時に実行するには以下のようにしてください。

(stdin.txt の内容が毎回、標準入力として与えられます。)

```
pnpm watch apps/atcoder/src/typical90/001/main.ts
```

# AtCoder で問題を解く時

scaffdog で雛形を生成することができます。

```
pnpm generate
```
