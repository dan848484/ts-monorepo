import { permutation } from './permutation';

describe('順列', () => {
  describe('[1,2]', () => {
    const array = [1, 2];
    test('[1,2]の順列の数', () => {
      expect(permutation(array, 2).length).toBe(2);
    });
  });

  describe('[1,2,3]', () => {
    const array = [1, 2, 3];
    test('[1,2,3]の順列の数', () => {
      expect(permutation(array, 3).length).toBe(6);
    });
  });

  describe('[1,2,3,4,5,6]', () => {
    const array = [1, 2, 3, 4, 5, 6];
    test('[1,2,3,4,5,6]の順列の数', () => {
      expect(permutation(array, 6).length).toBe(720);
    });
  });
});
