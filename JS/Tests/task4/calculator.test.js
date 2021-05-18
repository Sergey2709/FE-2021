import { calc } from './calculator'

it('should get sum of numbers', () => {
  const result = calc('1 + 2');

  expect(result).toEqual('1 + 2 = 3');
});

it('should get difference of numbers', () => {
  const result = calc('1 - 2');

  expect(result).toEqual('1 - 2 = -1');
});

it('should get multiplication of numbers', () => {
  const result = calc('2 * 2');

  expect(result).toEqual('2 * 2 = 4');
});

it('should get division of numbers', () => {
  const result = calc('6 * 2');

  expect(result).toEqual('6 * 2 = 12');
});

it('should get null if not a string', () => {
  const result = calc(6 * 2);

  expect(result).toEqual(null);
});