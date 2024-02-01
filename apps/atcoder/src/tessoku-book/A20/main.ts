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
  const rows = S.length + 1;
  const columns = T.length + 1;
  const dp = new Array(rows)
    .fill(undefined)
    .map((_) => new Array(columns).fill(0));
  dp[0][0] = 0;

  console.log(dp);
};
main(fs.readFileSync('/dev/stdin').toString());
