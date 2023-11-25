import * as fs from 'fs';
export const main = (input: string) => {
  console.log(input);
};
main(fs.readFileSync('/dev/stdin').toString());
