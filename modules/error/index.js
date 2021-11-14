const { stdout, stderr } = process;

const handleError = (code) => {
  switch (code) {
    case 0:
      stdout.write('Done!\n');
      break;
    case 1:
      stderr.write(`Error(code - ${code}). Duplicates in argument\n`);
      break;
    case 2:
      stderr.write(`Error(code - ${code}). Config is not valid\n`);
      break;
    case 3:
      stderr.write(`Error(code - ${code}). Missing required flag (-c/--config)\n`);
      break;
    default:
      break;
  }
};

module.exports = handleError;
