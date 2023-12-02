import * as fs from 'fs';
/**
 * https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_d
 * 10進数で表された値を10桁の2進数に変換する。
 * @param input
 */
const main = (input: string) => {
  const N = Number(input);
  const solution: number[] = [];
  for (let i = 9; i >= 0; i--) {
    const divisor = 1 << i;
    solution.push(Math.floor((N / divisor) % 2));
  }
  console.log(solution.join(''));
};
main(fs.readFileSync('/dev/stdin').toString());
