const getDuplicates = require('./duplicates');
const validateConfig = require('./validateConfig');

const getAllowedConfig = (args) => {
  if (getDuplicates(args)) process.exit(1);

  const allowedFlags = {
    cipher: { short: '-c', long: '--config', required: true },
    input: { short: '-i', long: '--input' },
    output: { short: '-o', long: '--output' },
  };

  const getConfigValue = (obj) => {
    const shortIndex = args.indexOf(obj.short);
    const longIndex = args.indexOf(obj.long);
    if (shortIndex !== -1) {
      return args[shortIndex + 1];
    }
    if (longIndex !== -1) {
      return args[longIndex + 1];
    }
    return obj.required ? process.exit(3) : false;
  };

  const config = {
    cipher: getConfigValue(allowedFlags.cipher)?.split('-'),
    input: getConfigValue(allowedFlags.input),
    output: getConfigValue(allowedFlags.output),
  };

  return validateConfig(config.cipher) ? config : process.exit(2);
};

module.exports = getAllowedConfig;
