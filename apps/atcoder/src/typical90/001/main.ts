export function main(input: string) {
  const lines = input.split('\n');
  // let N = 0; //切れ込みの数
  let L = 0; //羊羹の長さ
  let K = 0; //選ぶ切れ目の数（切ってしまう切り目の数）つまり、ピースはK+1個となる。
  let A: number[] = []; //切れ目の位置
  lines.forEach((line, i) => {
    const inputs = line.split(' ').map((v) => Number(v));
    switch (i) {
      case 0:
        // N = inputs[0];
        L = inputs[1];
        break;
      case 1:
        K = inputs[0];
        break;
      case 2:
        A = inputs;
        break;
    }
  });

  /**
   * すべてのピースの長さをx以上にすることができるか。
   */
  const check = (x: number) => {
    let num = 0; //xで切ることのできる数
    let pre = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] - pre >= x) {
        num++;
        pre = A[i];
      }
    }
    if (L - pre >= x) {
      num++;
    }
    return num >= K + 1;
  };

  //ここでの二分探索はよくある配列の二分探索ではない。
  //イメージ的には[1,2,3,... ,L]みたいな配列の探索をしているノリかなと思う。
  let left = 0;
  let right = L;
  while (right - left > 1) {
    const middle = Math.floor((left + right) / 2);
    if (check(middle)) {
      left = middle;
    } else {
      right = middle;
    }
  }

  console.log(left);
}
