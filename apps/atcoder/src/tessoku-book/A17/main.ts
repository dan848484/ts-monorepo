import * as fs from 'fs';
interface Route {
  /**
   * たどる部屋
   */
  routes: number[];
  /**
   * 時間
   */
  time: number;
}
const main = (input: string) => {
  const lines = input.split('\n');
  const N = Number(lines[0]);
  const A = lines[1].split(' ').map(Number);
  const B = lines[2].split(' ').map(Number);
  const dp = new Array<Route>(N).fill(null);
  for (let i = 0; i < dp.length; i++) {
    if (i === 0) {
      dp[i] = {
        routes: [1],
        time: 0,
      };
    } else if (i == 1) {
      // dp[i] = dp[i - 1] + A[i - 1];
      const routes = [...dp[i - 1].routes, i + 1];
      const time = dp[i - 1].time + A[i - 1];
      dp[i] = {
        routes,
        time,
      };
    } else {
      // dp[i] = Math.min(dp[i - 1] + A[i - 1], dp[i - 2] + B[i - 2]);
      const timeFromPrevious = dp[i - 1].time + A[i - 1];
      const timeFromTwoRoomsNext = dp[i - 2].time + B[i - 2];

      if (timeFromPrevious < timeFromTwoRoomsNext) {
        //一個前の部屋からの移動の方が短い時間で移動できる場合
        const routes = [...dp[i - 1].routes, i + 1];
        const time = dp[i - 1].time + A[i - 1];
        dp[i] = {
          routes,
          time,
        };
      } else {
        //二個前の部屋からの移動の方が短い時間で移動できる場合
        const routes = [...dp[i - 2].routes, i + 1];
        const time = dp[i - 2].time + B[i - 2];
        dp[i] = {
          routes,
          time,
        };
      }
    }
  }
  console.log(dp[N - 1].routes.length);
  console.log(dp[N - 1].routes.join(' '));
};
main(fs.readFileSync('/dev/stdin').toString());
