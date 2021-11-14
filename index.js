const fs = require('fs');
const { pipeline } = require('stream');
const { Transform } = require('stream');
const crypt = require('./modules/crypt');
const getAllowedConfig = require('./modules/validation');
const handleError = require('./modules/error');

const args = process.argv.slice(2);
const {
  stdout, stdin, exit, stderr,
} = process;

process.on('exit', (code) => handleError(code));

const config = getAllowedConfig(args);

const readableStream = config.input ? fs.createReadStream(config.input, 'utf-8') : stdin;
const writableStream = config.output ? fs.createWriteStream(config.output, { flags: 'a' }) : stdout;

readableStream.on('error', () => exit(4));
writableStream.on('error', () => exit(5));

const getTransformArr = (arr) => {
  const newArr = arr.map((item) => {
    const trans = new Transform({
      transform(chunk, encoding, callback) {
        callback(null, crypt(chunk, item));
      },
    });
    // console.log(trans);
    return trans;
  });
  return newArr;
};
const transformArr = getTransformArr(config.cipher);
// console.log(transformArr);

const text = 'This is secret. Message about "_" symbol!';
console.log(config);

pipeline(
  readableStream,
  ...transformArr,
  writableStream,
  (error) => error && stderr.write(error),
);
