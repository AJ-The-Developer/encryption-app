import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VigenereService {
  constructor() {}

  generateKey(plaintext: string, keyword: string) {
    let plaintextLen: number = plaintext.length;
    let keywordLen: number = keyword.length;

    if (keyword.length === plaintextLen) return keyword;
    if (keyword.length >= plaintextLen) return keyword.slice(0, plaintextLen);

    for (let i = 0; i < plaintextLen - keywordLen; i++) {
      keyword += keyword[i];
    }
    return keyword.toUpperCase();
  }

  vigenereEncrypt(plaintext: string, keyword: string) {
    let ciphertext: string = '';
    for (let i = 0; i < plaintext.length; i++) {
      let pos1 = plaintext.charCodeAt(i);
      let pos2 = keyword.charCodeAt(i) - 32;
      let char = pos1 + pos2;
      if (char > 126) char -= 95;
      ciphertext += String.fromCharCode(char);
    }
    return ciphertext;
  }

  vigenereDecrypt(ciphertext: string, keyword: string) {
    let plaintext: string = '';
    for (let i = 0; i < ciphertext.length; i++) {
      let pos1 = ciphertext.charCodeAt(i);
      let pos2 = keyword.charCodeAt(i) - 32;
      let char = pos1 - pos2;
      if (char < 32) char += 95;
      plaintext += String.fromCharCode(char);
    }
    return plaintext;
  }
}
