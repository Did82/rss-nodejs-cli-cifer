const crypt = require('./modules/crypt');

const text = 'This is secret. Message about "_" symbol!';
const {
  stdout, stdin, exit, stderr,
} = process;
const args = process.argv.slice(2);

const hasDuplicates = (array) => new Set(array).size !== array.length;

process.on('exit', (code) => {
  if (code === 0) {
    stdout.write('Done!\n');
  } else {
    stderr.write(`Что-то пошло не так. Программа завершилась с кодом ${code}\n`);
  }
});

hasDuplicates(args) && exit(1);

const getAllowedConfig = (args) => {
  const allowedConfig = ['C0', 'C1', 'R0', 'R1', 'A'];
  const allowedFlags = {
    cipher: { short: '-c', long: '--config', required: true },
    input: { short: '-i', long: '--input' },
    output: { short: '-o', long: '--output' },
  };

  const validateConfig = (arr) => arr.every((item) => allowedConfig.includes(item));

  const getConfigValue = (obj) => {
    const shortIndex = args.indexOf(obj.short);
    const longIndex = args.indexOf(obj.long);
    if (shortIndex !== -1) {
      return args[shortIndex + 1];
    }
    if (longIndex !== -1) {
      return args[longIndex + 1];
    }
    return obj.required ? exit(3) : false;
  };

  const config = {
    cipher: getConfigValue(allowedFlags.cipher).split('-'),
    input: getConfigValue(allowedFlags.input),
    output: getConfigValue(allowedFlags.output),
  };

  const isAllowedConfig = validateConfig(config.cipher);
  return isAllowedConfig ? config : exit(2);
};

const config = getAllowedConfig(args);
console.log(config);
