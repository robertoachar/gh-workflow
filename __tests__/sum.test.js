import sum from '../src';

describe('TESTS', () => {
  test('should sum', () => {
    expect(sum(5, 5)).toBe(10);
  });
});
