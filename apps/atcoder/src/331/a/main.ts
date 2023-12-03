import * as fs from 'fs';
const main = (input: string) => {
  const lines = input.split('\n');
  const [M, D] = lines[0].split(' ').map(Number);
  const [y, m, d] = lines[1].split(' ').map(Number);

  let tD = d + 1;
  let tM = m;
  let tY = y;
  if (tD > D) {
    tM += 1;
    tD = 1;
  }
  if (tM > M) {
    tY += 1;
    tM = 1;
  }
  console.log(`${tY} ${tM} ${tD}`);
};
main(fs.readFileSync('/dev/stdin').toString());
