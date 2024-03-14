export const selectionSort = (nums: number[]) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    let max = nums[i];
    let maxIndex = i;
    for (let j = 0; j < i; j++) {
      if (nums[j] > max) {
        max = nums[j];
        maxIndex = j;
      }
    }
    const cache = nums[i];
    nums[i] = nums[maxIndex];
    nums[maxIndex] = cache;
  }
};
