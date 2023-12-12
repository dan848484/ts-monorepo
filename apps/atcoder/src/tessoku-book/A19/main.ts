import * as fs from 'fs';
const main = (input: string) => {
  const lines = input.split('\n');
  let N: number;
  let W: number;
  const weights: number[] = [];
  const values: number[] = [];
  lines.forEach((line, i) => {
    if (i === 0) {
      const firstLine = line.split(' ').map(Number);
      N = firstLine[0];
      W = firstLine[1];
    } else if (line) {
      const [w, v] = line.split(' ').map(Number);
      weights.push(w);
      values.push(v);
    }
  });
  const dp: (number | undefined)[][] = new Array(N + 1).fill(undefined);
  dp.forEach((_, i) => {
    dp[i] = new Array(W + 1).fill(undefined);
  });
  dp[0][0] = 0; //品物0個で重さ制限0の時は0。

  for (let i = 1; i < N + 1; i++) {
    const w = weights[i - 1];
    const v = values[i - 1];
    for (let j = 0; j < W + 1; j++) {
      const valueWithoutItem = dp[i - 1][j] ?? 0;
      const valueWithItem = j - w >= 0 ? (dp[i - 1][j - w] ?? 0) + v : 0;
      dp[i][j] = Math.max(valueWithoutItem, valueWithItem);
    }
  }

  console.log(dp[N][W]);
};
main(fs.readFileSync('/dev/stdin').toString());
