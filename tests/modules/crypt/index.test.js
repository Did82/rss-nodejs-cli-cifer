const crypt = require('../../../modules/crypt');

const text = 'AbC_dEf!';
const caesar = {
  encode: { data: text, config: 'C1', result: 'BcD_eFg!' },
  decode: { data: 'BcD_eFg!', config: 'C0', result: text },
};
const rot = {
  encode: { data: text, config: 'R1', result: 'IjK_lMn!' },
  decode: { data: 'IjK_lMn!', config: 'R0', result: text },
};
const atbash = {
  encode: { data: text, config: 'A', result: 'ZyX_wVu!' },
  decode: { data: 'ZyX_wVu!', config: 'A', result: text },
};
describe('crypt', () => {
  test('caesar cipher', () => {
    expect(crypt(caesar.encode.data, caesar.encode.config)).toBe(caesar.encode.result);
    expect(crypt(caesar.decode.data, caesar.decode.config)).toBe(caesar.decode.result);
  });
  test('rot8 cipher', () => {
    expect(crypt(rot.encode.data, rot.encode.config)).toBe(rot.encode.result);
    expect(crypt(rot.decode.data, rot.decode.config)).toBe(rot.decode.result);
  });
  test('atbash cipher', () => {
    expect(crypt(atbash.encode.data, atbash.encode.config)).toBe(atbash.encode.result);
    expect(crypt(atbash.decode.data, atbash.decode.config)).toBe(atbash.decode.result);
  });
});
