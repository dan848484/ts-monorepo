import * as fs from 'fs';
/**
 * A 以上 B 以下の整数のうち、100 の約数であるものは存在しますか。
 * @param input
 */
export const main = (input: string) => {
  const lines = input.split('\n');
  const [A, B] = lines[0].split(' ').map(Number);
  for (let i = A; i <= B; i++) {
    if (100 % i === 0) {
      console.log('Yes');
      return;
    }
  }
  console.log('No');
};

main(fs.readFileSync('/dev/stdin').toString());
