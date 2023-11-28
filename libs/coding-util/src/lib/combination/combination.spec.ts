import { combination } from './combination';
describe('組み合わせ', () => {
  const array1 = [1, 2, 3, 4];
  const array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  test(`${array1}から3個選ぶ`, () => {
    expect(combination(array1, 3).length).toBe(4);
  });

  test(`${array1}から4個選ぶ`, () => {
    expect(combination(array1, 4).length).toBe(1);
  });

  test(`${array2}から4個選ぶ`, () => {
    expect(combination(array2, 4).length).toBe(35);
  });

  test(`${array2}から2個選ぶ`, () => {
    expect(combination(array2, 2).length).toBe(21);
  });
});
