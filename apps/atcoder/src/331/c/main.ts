import * as fs from 'fs';
const main = (input: string) => {
  const lines = input.split('\n');
  const N = Number(lines[0]);
  const A = lines[1].split(' ').map(Number);
  const sortedA = [...A].sort((a, b) => b - a);
  const sum = new Map<number, number>();
  let increaseAmount = 0;
  for (let i = 0; i < sortedA.length; i++) {
    const target = sortedA[i];
    if (i == 0) {
      sum.set(target, 0);
      increaseAmount = target;
      continue;
    }
    const previous = sortedA[i - 1];
    if (target != previous) {
      const previousSum = sum.get(previous)!;
      sum.set(target, previousSum + increaseAmount);
      increaseAmount = target;
    } else {
      increaseAmount += target;
    }
  }
  const solution: number[] = [];
  for (let i = 0; i < A.length; i++) {
    const target = A[i];
    solution.push(sum.get(target));
  }
  console.log(solution.join(' '));
};
main(fs.readFileSync('/dev/stdin').toString());
