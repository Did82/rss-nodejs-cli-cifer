const handleError = require('../../../modules/error');

const spyError = jest.spyOn(process.stderr, 'write');
const spyDone = jest.spyOn(process.stdout, 'write');

const codeError = [1, 2, 3, 4, 5];

describe('handleError', () => {
  test('Should write to console Done', () => {
    const isDone = !handleError(0);
    expect(spyDone).toHaveBeenCalled();
    expect(isDone).toBe(true);
  });
  test.each(codeError)('Should write to console error with code %j', (code) => {
    const isError = !handleError(code);
    expect(spyError).toHaveBeenCalled();
    expect(isError).toBe(true);
  });
});
