import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VernamService {

  constructor() { }

  generateKey(plaintext: string, keyword: string): string {
    let plaintextLen: number = plaintext.length;
    let keywordLen: number = keyword.length;

    if (keyword.length === plaintextLen) return keyword;
    if (keyword.length >= plaintextLen) 
      return keyword.slice(0,plaintextLen);
      
    for(let i = 0;i<plaintextLen-keywordLen;i++) {
      keyword += keyword[i];
    }
    return keyword.toUpperCase();
  }

  vernam(input, key) {
    let l_key = key.length;
    let fromCharCode = String.fromCharCode;

    return input.replace(/[\s\S]/g, function(c, i) {
      return fromCharCode(key.charCodeAt(i % l_key) ^ c.charCodeAt(0));
    });      
  };

  /*
    input = input.toUpperCase();
    let ciphertext: string = '';

    for (let i = 0; i < input.length; i++)
    {
      let pos1 = input.charCodeAt(i);
      let pos2 = key.charCodeAt(i) - 65;
      let char = pos1 + pos2;
      if(char > 90) char -= 26;
      ciphertext += String.fromCharCode(char) 
    }
    return ciphertext;
  }
    
    let fromCharCode = String.fromCharCode;

    return input.replace(/[\s\S]/g, function(c, i) {
      return fromCharCode(key.charCodeAt(i % l_key) ^ c.charCodeAt(0));
    });      
  };*/
}
