const validateConfig = require('../../../modules/validation/validateConfig');

// const allowedArr = ['C1', 'R0', 'A'];
const configs = [
  [['C1', 'R0', 'A'], true],
  [['c1', 'R1', 'R0'], false],
  [['R1', 'R0', 'C2'], false],
  [['G1', 'C1'], false],
  [['11', 'A'], false],
];

describe('validateConfig', () => {
  test.each(configs)('Should validate config %j', (fixture, result) => {
    expect(validateConfig(fixture)).toBe(result);
  });
});
