const handleError = require('../../../modules/error');

const spyError = jest.spyOn(process.stderr, 'write');
const spyDone = jest.spyOn(process.stdout, 'write');

const codeError = [
  [1, true],
  [2, true],
  [3, true],
  [4, true],
  [5, true],
];

describe('handleError', () => {
  test('Should write to console Done', () => {
    const isDone = !handleError(0);
    expect(spyDone).toHaveBeenCalled();
    expect(isDone).toBe(true);
  });
  test.each(codeError)('Should write to console error with code %j', (code, result) => {
    const isError = !handleError(code);
    expect(spyError).toHaveBeenCalled();
    expect(isError).toBe(result);
  });
});
