// import * as fs from 'fs';
// import { spawn } from 'child_process';
// import { join } from 'path';

// const input = fs.readFileSync(join(process.cwd(), 'stdin.txt')).toString();
// const targetFilePath = join(process.cwd(), process.argv[2]);
// console.log('start watching...: ', targetFilePath);
// let lock = false;
// let lastExecutionTime = 0;
// const executeScript = () => {
//   const currentTime = new Date().getTime();
//   //executeScriptがなぜか2回呼び出されてしまうため、対策
//   if (currentTime - lastExecutionTime < 2000 || lock) return;
//   lock = true;
//   console.log('-------------------');
//   const proc = spawn(
//     `echo "${input}" | ts-node -P ./tsconfig.base.json --esm ${targetFilePath} `,
//     [],
//     {
//       shell: true,
//     }
//   );
//   proc.stdout.on('data', (data) => {
//     console.log(data.toString());
//   });
//   proc.stderr.on('data', (data) => {
//     console.error(data.toString());
//   });
//   proc.on('close', () => {
//     lock = false;
//     lastExecutionTime = new Date().getTime();
//   });
// };
// executeScript();
// fs.watch(targetFilePath, executeScript);

/**
 * atcoder app 自体に変更検知機能を搭載したいと思ったが、、、、
 *
 * そもそも app として atcoderを使うことが思想として異なる気がする。
 *
 * あくまでも開発時のツールだから app 自体の機能として実装するのはうまくいかないはず。
 */
