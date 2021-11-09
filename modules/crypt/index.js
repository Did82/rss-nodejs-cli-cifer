const crypt = (data, action) => {
  const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
  let cipher = {};

  const caesarEncrypt = (alphabet, char, shift) => (alphabet.indexOf(char) + shift) % alphabet.length;

  const caesarDecrypt = (alphabet, char, shift) => (alphabet.indexOf(char) + alphabet.length - shift) % alphabet.length;

  const atbash = (alphabet, char) => ((alphabet.length - 1) * (alphabet.indexOf(char) + 1)) % alphabet.length;

  switch (action) {
    case 'C1':
      cipher = { cipherType: caesarEncrypt, shift: 1 };
      break;
    case 'C0':
      cipher = { cipherType: caesarDecrypt, shift: 1 };
      break;
    case 'R1':
      cipher = { cipherType: caesarEncrypt, shift: 8 };
      break;
    case 'R0':
      cipher = { cipherType: caesarDecrypt, shift: 8 };
      break;
    case 'A':
      cipher = { cipherType: atbash };
      break;
  }

  return data.toString().replace(/[a-zA-Z]/g, (char) => {
    if (char === char.toUpperCase()) {
      return alphabetUpper[
        cipher.cipherType(alphabetUpper, char, cipher.shift)
      ];
    }
    return alphabetLower[
      cipher.cipherType(alphabetLower, char, cipher.shift)
    ];
  });
};

module.exports = crypt;
