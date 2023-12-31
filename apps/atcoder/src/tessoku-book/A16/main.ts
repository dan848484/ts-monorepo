import * as fs from 'fs';
/**
 * ・解法メモ
 *
 * https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_p
 *
 * 部屋1から部屋nに移動するときにかかる時間をdpテーブルに格納する。
 *
 * ある部屋iまで行く最短ルートは2つ考えられる
 * 1. 部屋i-1まで移動した後部屋iへ移動
 * 2. 部屋i-2まで移動した後部屋iへ移動
 *
 * 実装にあたってはAはA2から始まること、BはB3から始まることに留意する必要があった。
 *
 * Ai は部屋i-1から部屋iへ向かうのにかかる時間
 * Bi は部屋i-2から部屋iへ向かうのにかかる時間
 *
 * @param input
 */
export const main = (input: string) => {
  const lines = input.split('\n');
  const N = Number(lines[0]);
  const A = lines[1].split(' ').map(Number);
  const B = lines[2].split(' ').map(Number);
  const dp = new Array(N).fill(null);
  for (let i = 0; i < dp.length; i++) {
    if (i === 0) {
      dp[i] = 0;
    } else if (i == 1) {
      dp[i] = dp[i - 1] + A[i - 1];
    } else {
      dp[i] = Math.min(dp[i - 1] + A[i - 1], dp[i - 2] + B[i - 2]);
    }
  }
  console.log(dp[N - 1]);
};
main(fs.readFileSync('/dev/stdin').toString());
