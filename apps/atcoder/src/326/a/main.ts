import * as fs from 'fs';
const main = (input: string) => {
  const floors = input
    .split('\n')[0]
    .split(' ')
    .map((f) => Number(f));
  const difference = floors[1] - floors[0];
  if (
    (difference >= 0 && difference <= 2) ||
    (difference < 0 && difference >= -3)
  ) {
    console.log('Yes');
  } else {
    console.log('No');
  }
};
main(fs.readFileSync('/dev/stdin').toString());
