export default class VigenèreCipher {
  constructor(key, alphabet) {
    this.alphabet = alphabet;
    this.key = key.split('').map(item => alphabet.indexOf(item));
  }

  transform(text, direction) {
    return text.split('').map((char, i) => {
      const charIndex = this.alphabet.indexOf(char);

      if (charIndex === -1) return char;

      const keyPosition = i % this.key.length;

      return this.alphabet[(charIndex + this.key[keyPosition] * direction + this.alphabet.length) % this.alphabet.length];
    }).join('');
  }

  encode(text) { 
    return this.transform(text, 1);
  }

  decode(text) { 
    return this.transform(text, -1); 
  }
}
