import * as fs from 'fs';
/**
 * LCS(最長共通部分列)
 *
 * https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_t
 *
 *
 *
 *
 * @param input
 */
const main = (input: string) => {
  const lines = input.split('\n');
  const S = lines[0];
  const T = lines[1];
  // 文字S * 文字T のマス目で考えていくが、0文字目を表現したいのでそれぞれ+1している。
  const rows = S.length + 1;
  const columns = T.length + 1;
  /**
   * dp[i][j] はi,jのマスに到達するまでに通る斜の辺の数。→ 最長共通部分列の長さ
   *
   * （Sの最初のi文字とTの最初のj文字における最長共通部分列の長さ）
   *
   * （S[i],T[j]の文字が等しければそのマスに斜めの線を引くことができる。）
   */
  const dp = new Array(rows)
    .fill(undefined)
    .map((_) => new Array(columns).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i >= 1 && j >= 1 && S[i - 1] === T[j - 1]) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] + 1);
      } else if (i >= 1 && j >= 1) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      } else if (i >= 1) {
        dp[i][j] = dp[i - 1][j];
      } else if (j >= 1) {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  console.log(dp[rows - 1][columns - 1]);
};
main(fs.readFileSync('/dev/stdin').toString());
