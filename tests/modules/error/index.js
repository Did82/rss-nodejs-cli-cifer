const { stdout, stderr } = process;

const handleError = (code) => {
  switch (code) {
    case 1:
      stderr.write(`Error(code - ${code}). Duplicates in argument\n`);
      break;
    case 2:
      stderr.write(`Error(code - ${code}). Config is not valid\n`);
      break;
    case 3:
      stderr.write(`Error(code - ${code}). Missing required flag (-c/--config)\n`);
      break;
    case 4:
      stderr.write(`Error(code - ${code}). Input file is missing or unavailable\n`);
      break;
    case 5:
      stderr.write(`Error(code - ${code}). Output file is missing or unavailable\n`);
      break;
    default:
      stdout.write('Done!\n');
  }
};

module.exports = handleError;
