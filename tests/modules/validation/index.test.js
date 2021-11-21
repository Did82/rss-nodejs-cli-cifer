const getAllowedConfig = require('../../../modules/validation');
const handleError = require('../../../modules/error');
// const handleError = require('../../../modules/error');

const argsDupl = ['-c', 'C1-R1-A', '-c'];
const argsRequired = ['C1-R1-A', '-i', './input.txt', '-o', './output.txt'];
const argsConfig = ['-c', 'C1-R2-A', '--input', './input.txt', '-o', './output.txt'];
const argsOnExit = [
  [argsDupl, 1],
  [argsRequired, 3],
  [argsConfig, 2],
];

describe('Should exit if args not valid', () => {
  test.each(argsOnExit)('Should exit with args: %j', (args, code) => {
    const exit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    getAllowedConfig(args);
    expect(exit).toHaveBeenCalledWith(code);
    exit.mockRestore();
  });
  test('', () => {

  });
});
