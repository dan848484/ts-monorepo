import * as fs from 'fs';
/**
 * https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_q
 *
 * dpテーブルには各部屋まで行くのにかかる最短時間を格納(A16と実装は同じ)
 *
 * その後に、dpテーブルの最後から順番に巡回して、
 * dp[i-1]+A[i-1]とdp[i-2]+B[i-2]を比較する。
 *
 * そして値が小さい方がたどってきた方であると判断する。
 *
 * このやり方を各部屋に対してくりかえてしていって、経路を求める。
 *
 * @param input
 */
export const main = (input: string) => {
  const lines = input.split('\n');
  const N = Number(lines[0]);
  const A = lines[1].split(' ').map(Number);
  const B = lines[2].split(' ').map(Number);
  const dp = new Array(N).fill(null);
  for (let i = 0; i < dp.length; i++) {
    if (i === 0) {
      dp[i] = 0;
    } else if (i == 1) {
      dp[i] = dp[i - 1] + A[i - 1];
    } else {
      dp[i] = Math.min(dp[i - 1] + A[i - 1], dp[i - 2] + B[i - 2]);
    }
  }

  let roomNum = dp.length;
  const history: number[] = [];
  while (roomNum > 1) {
    const dpIndex = roomNum - 1;
    const timeFromPrevious = dp[dpIndex - 1] + A[dpIndex - 1];
    const timeFromTwoPrevious = dp[dpIndex - 2] + B[dpIndex - 2];
    history.push(roomNum);
    if (timeFromPrevious < timeFromTwoPrevious) {
      //1個前の部屋からの移動の方が短い時間で移動できる場合
      roomNum = roomNum - 1;
    } else {
      //2個前の部屋からの移動の方が短い時間で移動できる場合
      roomNum = roomNum - 2;
    }
  }
  history.push(1);
  history.reverse();
  console.log(history.length);
  console.log(history.join(' '));
};
main(fs.readFileSync('/dev/stdin').toString());
