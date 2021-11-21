const getDuplicates = require('../../../modules/validation/duplicates');

const arrAllowed = ['-c', '-i', '-o'];
const arrDuplicates = ['-c', '-i', '-o', '-c'];
const arrDuplicates2 = ['-c', '--input', '-o', '--input'];

describe('getDuplicates', () => {
  test('Should return true on duplicates', () => {
    expect(getDuplicates(arrDuplicates)).toBe(true);
  });
  test('Should return true on duplicates', () => {
    expect(getDuplicates(arrDuplicates2)).toBe(true);
  });
  test('Should return false on allowed array of arguments', () => {
    expect(getDuplicates(arrAllowed)).toBe(false);
  });
});
