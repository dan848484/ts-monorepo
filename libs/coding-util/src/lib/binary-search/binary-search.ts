export const binarySearch = (
  array: number[],
  target: number,
  sortCheck = false
) => {
  if (sortCheck) {
    let isSorted = true;
    for (let i = 0; i < array.length; i++) {
      if (i === 0 || array[i - 1] <= array[i]) continue;
      isSorted = false;
      break;
    }
    if (!isSorted)
      throw new Error('ソートされていないため、二分探索を行えませんでした。');
  }
  let index = -1;
  let left = 0;
  let right = array.length - 1;

  while (right >= left) {
    const middleIdx = Math.floor((right + left) / 2);
    if (target > array[middleIdx]) {
      left = middleIdx + 1;
    } else if (target < array[middleIdx]) {
      right = middleIdx - 1;
    } else {
      index = middleIdx;
      break;
    }
  }

  return index;
};
