export const insertionSort = (nums: number[]) => {
  for (let i = 1; i < nums.length; i++) {
    let x = nums[i];
    let indexToInsert = i;
    while (nums[indexToInsert - 1] > x && indexToInsert - 1 >= 0) {
      const cache = nums[indexToInsert - 1];
      nums[indexToInsert - 1] = x;
      nums[indexToInsert] = cache;
      x = nums[indexToInsert - 1];
      indexToInsert--;
    }
  }
};
