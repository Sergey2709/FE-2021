import { reverseArray } from './11reverse'

it('should get null if arr !== array', () => {
  const result = reverseArray(12);

  expect(result).toEqual(null);
});

it('should get reverse array', () => {
  const result = reverseArray([1, 2, 3, 4]);

  expect(result).toEqual([4, 3, 2, 1]);
});

it('should get empty array', () => {
  const result = reverseArray([]);

  expect(result).toEqual([]);
});