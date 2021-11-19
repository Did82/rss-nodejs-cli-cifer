const crypt = require('../../../modules/crypt');

const text = 'aaa';

test('test crypt module', () => {
  expect(crypt(text, 'C1')).toBe('bbb');
});
