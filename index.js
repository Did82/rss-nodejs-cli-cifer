const crypt = require('./modules/crypt');

const text = 'This is secret. Message about "_" symbol!';
const { stdout, stdin, exit } = process;
const myArg = process.argv.slice(2);
const allowedConfig = ['C0', 'C1', 'R0', 'R1', 'A'];
const allowedFlags = ['-c', '--config', '-i', '--input', '-o', '--output'];

const getConfigValue = (flag) => {
  const flagIndex = process.argv.indexOf(flag);
  return flagIndex !== -1 ? process.argv[flagIndex + 1].split('-') : null;
};

const config = getConfigValue('-c');
const message2 = getConfigValue('-i');
const message3 = getConfigValue('-o');
console.log(crypt(text, config[2]));
console.log(config);
console.log(message2);
console.log(message3);
