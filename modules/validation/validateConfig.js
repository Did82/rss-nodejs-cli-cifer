const allowedConfig = ['C0', 'C1', 'R0', 'R1', 'A'];

const validateConfig = (arr) => arr?.every((item) => allowedConfig.includes(item));

module.exports = validateConfig;
