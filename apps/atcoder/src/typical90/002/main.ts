import * as fs from 'fs';

export const main = (input: string) => {
  const N = Number(input);
  const isValid = (str: string) => {
    let score = 0;
    for (const c of str) {
      if (c === '(') score++;
      else if (c === ')') score--;
      if (score < 0) return false;
    }
    return score === 0;
  };
  //ビット全探索
  for (let bit = 0; bit < 1 << N; bit++) {
    let str = '';
    for (let i = N - 1; i >= 0; i--) {
      if (!(bit & (1 << i))) {
        str += '(';
      } else {
        str += ')';
      }
    }
    if (isValid(str)) {
      console.log(str);
    }
  }
};

// main(fs.readFileSync('/dev/stdin').toString());
