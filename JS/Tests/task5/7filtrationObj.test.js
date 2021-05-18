import { getAdults } from './7filtrationObj'

it('should get adult people', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get empty object', () => {
  const result = getAdults({ 'John Doe': 12, Tom: 17, Bob: 1 });

  expect(result).toEqual({});
});

it('should get null if obj !== object', () => {
  const result = getAdults(12);

  expect(result).toEqual(null);
});