import * as fs from 'fs';
const main = (input: string) => {
  let num = Number(input);
  const isValid = (inputNum: number) => {
    const digits = String(inputNum).split('').map(Number);
    const result = digits[0] * digits[1];
    return result === digits[2];
  };
  let valid = isValid(num);
  while (!valid) {
    num++;
    valid = isValid(num);
  }
  console.log(num);
};
main(fs.readFileSync('/dev/stdin').toString());
