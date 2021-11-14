const fs = require('fs');

const {
  stdout, stdin, exit, stderr,
} = process;

const readableStream = fs.createReadStream(config.input, 'utf-8');

let data = '';

stream.on('data', (chunk) => data += chunk);
stream.on('end', () => stdout.write(data.trim()));
stream.on('error', (error) => stderr.write(error.message));
