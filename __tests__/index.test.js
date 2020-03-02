import reverse from '../src/index';

// eslint-disable-next-line no-undef
test('reverse', () => {
  // eslint-disable-next-line no-undef
  expect(reverse('hello')).toEqual('olleh');
  // eslint-disable-next-line no-undef
  expect(reverse('')).toEqual('');
});
