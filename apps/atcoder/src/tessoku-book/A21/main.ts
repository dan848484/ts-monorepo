import * as fs from 'fs';
/**
 * https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_u
 * A21 Block Game
 *
 *
 *
 * @param input
 */
const main = (input: string) => {
  const lines = input.split('\n');
  const N = Number(lines[0]);
  const P: number[] = new Array(N).fill(0);
  const A: number[] = new Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    const line = lines[i + 1];
    const tokens = line.split(' ').map(Number);
    P[i] = tokens[0];
    A[i] = tokens[1];
  }
  const dp = new Array(N).fill(undefined);
  for (let i = 0; i < N; i++) {
    dp[i] = new Array(N).fill(0);
  }

  for (let LEN = N - 2; LEN >= 0; LEN--) {
    for (let l = 1; l < N - LEN; l++) {
      const r = l + LEN;
      //左端を取り出す場合のスコア
      let score1 = 0;
      if (l <= P[l - 1] && P[l - 1] <= r) {
        score1 = A[l - 1];
      }
    }
  }
};
main(fs.readFileSync('/dev/stdin').toString());
