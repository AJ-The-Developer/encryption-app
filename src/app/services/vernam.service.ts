import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VernamService {
  constructor() {}

  generateKey(plaintext: string, keyword: string): string {
    let plaintextLen: number = plaintext.length;
    let keywordLen: number = keyword.length;

    if (keyword.length === plaintextLen) return keyword;
    if (keyword.length >= plaintextLen) return keyword.slice(0, plaintextLen);

    for (let i = 0; i < plaintextLen - keywordLen; i++) {
      keyword += keyword[i];
    }
    return keyword.toUpperCase();
  }

  vernam(input, key) {
    let l_key = key.length;
    let fromCharCode = String.fromCharCode;

    return input.replace(/[\s\S]/g, function (c, i) {
      return fromCharCode(key.charCodeAt(i % l_key) ^ c.charCodeAt(0));
    });
  }
}
