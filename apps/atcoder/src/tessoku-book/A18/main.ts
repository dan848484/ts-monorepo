import * as fs from 'fs';
const main = (input: string) => {
  const lines = input.split('\n');
  const [N, S] = lines[0].split(' ').map(Number);
  const A = lines[1].split(' ').map(Number);
  if (S === 0) {
    console.log('Yes');
  }
  for (let i = 0; i < A.length; i++) {
    let subsetSum = 0;

    for (let j = i; j < A.length; j++) {
      subsetSum += A[j];
      if (subsetSum === S) {
        console.log('Yes');
        return;
      }
    }
  }
  console.log('No');
};
main(fs.readFileSync('/dev/stdin').toString());
