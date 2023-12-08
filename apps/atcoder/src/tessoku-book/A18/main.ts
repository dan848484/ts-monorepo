import * as fs from 'fs';
/**
 * https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_r
 * A18 Subset Sum
 *
 * 解法メモ
 *
 * dpは2次元配列。行は0~N行あって、何番目のカードまで使って考えるかを表す。
 * 列は0~S列あって、合計を表す。(p116参照)
 *
 * 行→i、列→j
 * ・カードi-1の時点で合計がすでにjであればカードiを選ぶ必要はないから、マルをつける。
 * ・カードi-1の時点で合計がj-Aiであればカードiを選ぶとちょうど合計がjとなるのでマルをつける。
 *
 *
 * @param input
 */
const main = (input: string) => {
  const lines = input.split('\n');
  const [N, S] = lines[0].split(' ').map(Number);
  const A = lines[1].split(' ').map(Number);
  const dp = new Array(N + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(S + 1).fill(false);
  }
  dp[0][0] = true;
  for (let i = 1; i < dp.length; i++) {
    const Ai = A[i - 1];
    for (let j = 0; j < dp[0].length; j++) {
      if (dp[i - 1][j] || (j >= Ai && dp[i - 1][j - Ai])) {
        dp[i][j] = true;
      }
    }
  }
  console.log(dp[N][S] ? 'Yes' : 'No');
};
main(fs.readFileSync('/dev/stdin').toString());
