import * as fs from 'fs';
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
