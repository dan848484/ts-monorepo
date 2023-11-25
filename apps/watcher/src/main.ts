import * as fs from 'fs';

const input = fs.readFileSync(process.cwd() + '/stdin.txt').toString();
console.log(input);
