import * as fs from 'fs';
// export const main = (input: string) => {};
main(fs.readFileSync('/dev/stdin').toString());
