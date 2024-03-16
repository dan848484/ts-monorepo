import * as fs from 'fs';
/**
 * https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_u
 * A21 Block Game
 *
 * O(n^2)
 *
 * @param input
 */
const main = (input: string) => {
  const lines = input.split('\n');
  const N = Number(lines[0]);
  const P: number[] = new Array(N + 1).fill(0);
  const A: number[] = new Array(N + 1).fill(0);
  for (let i = 0; i < N; i++) {
    const line = lines[i + 1];
    const tokens = line.split(' ').map(Number);
    P[i + 1] = tokens[0];
    A[i + 1] = tokens[1];
  }
  const dp = new Array(N + 1).fill(undefined);
  for (let i = 0; i < N + 1; i++) {
    dp[i] = new Array(N + 1).fill(0);
  }
  for (let LEN = N - 2; LEN >= 0; LEN--) {
    for (let l = 1; l <= N - LEN; l++) {
      //dp[l][r]のスコアを求める
      const r = l + LEN;

      //(l+1,r)の状態から左端を取り出す場合のスコア
      let score1 = 0;
      if (l <= P[l - 1] && P[l - 1] <= r) {
        score1 = A[l - 1];
      }
      //(l,r+1)の状態から右端を取り出す場合のスコア
      let score2 = 0;
      if (r < N && l <= P[r + 1] && P[r + 1] <= r) {
        score2 = A[r + 1];
      }

      dp[l][r] = Math.max(
        l - 1 >= 1 ? dp[l - 1][r] + score1 : -Infinity,
        r + 1 <= N ? dp[l][r + 1] + score2 : -Infinity
      );
    }
  }
  let maxValue = 0;
  for (let i = 0; i < N + 1; i++) {
    for (let j = 0; j < N + 1; j++) {
      const value = dp[i][j];
      maxValue = Math.max(maxValue, value);
    }
  }
  console.log(maxValue);
};
main(fs.readFileSync('/dev/stdin').toString());
