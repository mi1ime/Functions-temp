import hpStatus from '../hpStatus';

test('statusHealthy', () => {
  const player = { name: 'Маг', health: 100 };
  const result = hpStatus(player);
  expect(result).toBe('healthy');
});
test('statusWounded', () => {
  const player = { name: 'Маг', health: 73 };
  const result = hpStatus(player);
  expect(result).toBe('wounded');
});
test('statusCritical', () => {
  const player = { name: 'Маг', health: 12 };
  const result = hpStatus(player);
  expect(result).toBe('critical');
});
