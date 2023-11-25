import * as fs from 'fs';
const main = (input: string) => {
  const lines = input.split('\n');
  const [N, M] = lines[0].split(' ').map(Number);
  const coordinates = lines[1].split(' ').map(Number);
  coordinates.sort((a, b) => a - b);
  const cumulativeSum = new Array(N).fill(0);
  coordinates.forEach((c, i) => {
    cumulativeSum[i] = coordinates[i] + i > 0 ? cumulativeSum[i - 1] : 0;
  });
  let x = 0;
  let maxScore = 0;
  while (x + M <= coordinates[coordinates.length - 1]) {
    let localScore = 0;
    let searchCoordinate = 0;
    const finalPoint = Math.min(x + M, coordinates[N - 1]);

    for (let i = 0; i < coordinates.length; i++) {
      searchCoordinate = coordinates[i];
      if (!localScore) {
        if (x < searchCoordinate) {
          localScore += 1;
        }
      } else if (searchCoordinate < finalPoint) {
        localScore += 1;
      } else {
        break;
      }
    }
    // const maxScoreCache = maxScore;
    maxScore = Math.max(maxScore, localScore);
    // if (maxScore !== maxScoreCache) {
    //   console.log(`score updated: ${maxScoreCache}→${maxScore}`);
    // }
    x += 0.1;
  }
  console.log(maxScore);
};
main(fs.readFileSync('/dev/stdin').toString());
