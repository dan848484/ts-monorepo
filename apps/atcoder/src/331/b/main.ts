import * as fs from 'fs';
const main = (input: string) => {
  const lines = input.split('\n');
  const [N, S, M, L] = lines[0].split(' ').map(Number);
  /**
   * 必要な卵の数は高々100個だから、どのパックも高々100個買えば十分。全探索で解ける問題。
   */
  let ans = Infinity;
  for (let a = 0; a <= 100; a++) {
    for (let b = 0; b <= 100; b++) {
      for (let c = 0; c <= 100; c++) {
        if (a * 6 + b * 8 + c * 12 >= N) {
          ans = Math.min(ans, a * S + b * M + c * L);
        }
      }
    }
  }
  console.log(ans);
};
main(fs.readFileSync('/dev/stdin').toString());
