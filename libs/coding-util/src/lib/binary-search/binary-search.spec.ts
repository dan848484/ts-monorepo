import { binarySearch } from './binary-search';
describe('二分探索', () => {
  describe('[1, 2, 3, 4, 5, 13, 49]', () => {
    const array = [1, 2, 3, 4, 5, 13, 49];
    test('4の探索', () => {
      expect(binarySearch(array, 4, true)).toBe(3);
    });
    test('2の探索', () => {
      expect(binarySearch(array, 2, true)).toBe(1);
    });
    test('49の探索', () => {
      expect(binarySearch(array, 49, true)).toBe(6);
    });
    test('13の探索', () => {
      expect(binarySearch(array, 13, true)).toBe(5);
    });
    test('1の探索', () => {
      expect(binarySearch(array, 1, true)).toBe(0);
    });
  });
  describe('[]', () => {
    const array: number[] = [];
    test('4の探索', () => {
      expect(binarySearch(array, 4, true)).toBe(-1);
    });
  });
});
