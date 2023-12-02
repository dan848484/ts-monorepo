import * as fs from 'fs';
import { spawn } from 'child_process';
import * as babel from '@babel/core';

const targetFilePath = process.cwd() + '/' + process.argv[2];
const outputFilePath = process.cwd() + '/.watcher/main.js';

console.log('start watching...: ', targetFilePath);

let lock = false;
let lastExecutionTime = 0;

const executeScript = async () => {
  const currentTime = new Date().getTime();
  if (currentTime - lastExecutionTime < 2000 || lock) return;
  lock = true;
  console.log('-------------------');

  const code = fs.readFileSync(targetFilePath, 'utf-8');

  let result: babel.BabelFileResult;
  try {
    result = await babel.transformAsync(code, {
      filename: targetFilePath,
      presets: [
        '@babel/preset-typescript',
        ['@babel/preset-env', { modules: 'commonjs' }],
      ],
    });
  } catch (e) {
    console.error(e);
    lock = false;
  }
  //トランスパイル結果を書き込む。
  fs.writeFileSync(outputFilePath, result.code);
  //標準入力として渡す内容を取得
  const input = fs.readFileSync(process.cwd() + '/stdin.txt').toString();
  const proc = spawn(`echo "${input}" | node ${outputFilePath}`, [], {
    shell: true,
  });

  proc.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  proc.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  proc.on('close', () => {
    lock = false;
    lastExecutionTime = new Date().getTime();
  });
};

executeScript();
fs.watch(targetFilePath, executeScript);
