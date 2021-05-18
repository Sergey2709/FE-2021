import { getMinSquaredNumber } from './getMinSquaredNumber';

it('should get null if empty array', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('should get null if string', () => {
  const result = getMinSquaredNumber('privet');

  expect(result).toEqual(null);
});

it('should get squared min number', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});
