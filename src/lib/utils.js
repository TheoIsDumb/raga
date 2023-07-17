import pkg from 'node-forge';
const { util, cipher } = pkg;

const key = '38346591'
const iv = '00000000'

export const decrypt = (enc, kbps320) => {
  const encrypted = util.decode64(enc)
  const decipher = cipher.createDecipher('DES-ECB', util.createBuffer(key, 'utf8'))

  decipher.start({ iv: util.createBuffer(iv, 'utf8') })
  decipher.update(util.createBuffer(encrypted))
  decipher.finish()

  const dec = decipher.output.getBytes();
  // const finalURL = kbps320 === "true" ? dec.replace('_96', '_320') : dec.replace('_96', '_160');
  return dec;
}

export function truncate(input, limit) {
  if (input.length > limit) {
    return input.substring(0, limit) + "...";
  }
  return input;
}