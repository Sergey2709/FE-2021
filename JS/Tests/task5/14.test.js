import { withdraw } from './14'


it('should get right answer', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});

it('should get -1 if not enough money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 37, -6], 'John', 50);

  expect(result).toEqual(-1);
});

it('should get invalid data if data is not array', () => {
  const result = withdraw(1, [1400, 37, -6], 'John', 50);

  expect(result).toEqual('invalid data');
});