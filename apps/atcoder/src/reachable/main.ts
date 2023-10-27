import fs from 'fs';

const main = (input: string) => {
  const lines = input.split('\n');
  const size = lines[0].split(' ').map(Number); //[4, 4]のようになる
  const rows = size[0]; //行の数
  const columns = size[1];
  const inputTable = lines
    .slice(1)
    .map((l) => l.split('').map((node) => (node === '.' ? true : false)));
  const graph: (number | undefined)[][] = new Array(size[0] * size[1])
    .fill(undefined)
    .map((_) => []);
  inputTable.reverse();
  for (let i = 0; i < rows; i++) {
    const rowOffset = i * columns;
    for (let j = 0; j < columns; j++) {
      if (!inputTable[i][j]) {
        //障害物の場合は次のループへ。
        continue;
      }
      //右隣
      if (j + 1 < columns && inputTable[i][j + 1]) {
        graph[rowOffset + j].push(rowOffset + j + 1);
      }
      //左隣
      if (j - 1 >= 0 && inputTable[i][j - 1]) {
        graph[rowOffset + j].push(rowOffset + j - 1);
      }
      //上隣
      if (i + 1 < inputTable.length && inputTable[i + 1][j]) {
        graph[rowOffset + j].push(rowOffset + columns + j);
      }
      //下隣
      if (i - 1 >= 0 && inputTable[i - 1][j]) {
        graph[rowOffset + j].push(rowOffset - columns + j);
      }
    }
  }
  console.log(graph);
};

main(fs.readFileSync('/dev/stdin').toString());
