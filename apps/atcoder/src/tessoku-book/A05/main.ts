import * as fs from 'fs';

export const main = (input: string) => {
  const lines = input.split('\n');
  const [N, K] = lines[0].split(' ').map(Number);
  let count = 0;
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      /**
       * 3つのカードの数のうち2が決まれば K - i - jで3つ目が決定する。
       * これを利用するとO(n^3)からO(n^2)へ計算量を削減することができる。
       */
      const thirdNum = K - i - j;
      if (1 <= thirdNum && thirdNum <= N) {
        count++;
      }
    }
  }
  console.log(count);
};
main(fs.readFileSync('/dev/stdin').toString());
