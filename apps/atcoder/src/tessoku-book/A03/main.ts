import * as fs from 'fs';
const main = (input: string) => {
  console.log(input);
};
main(fs.readFileSync('/dev/stdin').toString());