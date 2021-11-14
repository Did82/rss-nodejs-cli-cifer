const fs = require('fs');
const crypt = require('./modules/crypt');
const getAllowedConfig = require('./modules/validation');
const handleError = require('./modules/error');

const args = process.argv.slice(2);
const {
  stdout, stdin, exit, stderr,
} = process;

process.on('exit', (code) => handleError(code));

const stream = fs.createReadStream('source2.txt', 'utf-8');

let data = '';

stream.on('data', (chunk) => data += chunk);
stream.on('end', () => console.log('End', data));
stream.on('error', (error) => console.log('Error', error.message));

const config = getAllowedConfig(args);

const text = 'This is secret. Message about "_" symbol!';
console.log(config);
