import * as fs from 'fs';

/**
 * A03 - Two Cards
 *
 * https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_c
 * @param input
 */
export const main = (input: string) => {
  const lines = input.split('\n');
  let N = 0;
  let K = 0;
  let P: number[] = [];
  let Q: number[] = [];
  lines.forEach((line, i) => {
    const tokens = line.split(' ').map(Number);
    switch (i) {
      case 0:
        N = tokens[0];
        K = tokens[1];
        break;
      case 1:
        P = tokens;
        break;
      case 2:
        Q = tokens;
        break;
    }
  });
  for (let i = 0; i < P.length; i++) {
    const p = P[i];
    for (let j = 0; j < Q.length; j++) {
      const q = Q[j];
      if (p + q === K) {
        console.log('Yes');
        process.exit();
      }
    }
  }
  console.log('No');
};
main(fs.readFileSync('/dev/stdin').toString());
