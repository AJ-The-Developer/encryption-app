import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnAlgorithmService {

  constructor() { }

  generateKey(plaintext: string) {
    let keys = [''];
    let text1 = this.split(plaintext)[0];
    let text2 = this.split(plaintext)[1];

    keys[0] = this.getRandomString(text1.length);
    keys[1] = this.getRandomString(text2.length);
  
    return keys;
  }

  getRandomString(length) {
    let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

  split(input) {
    let returnstream = ['',''];
    let count = 0;

    let outputstream = input.split('',input.length);
    let l_output = outputstream.length;

    for (let i = 0; i < l_output/2; i++){
      returnstream[0] = returnstream[0] + outputstream[i];
      count++;
    }

    for (let i = count; i < l_output; i++){
      returnstream[1] = returnstream[1] + outputstream[i];
    }

    return returnstream;
  }

  ownEnc(input, keys) {
    let returnstream = [''];
    returnstream[0] = this.split(input)[0];
    returnstream[1] = this.split(input)[1];

    returnstream[0] = this.vernamonown(returnstream[0], keys[0]);
    returnstream[1] = this.vernamonown(returnstream[1], keys[1]);
    return returnstream;    
  };

  ownDec(input, key1, key2) {
    let returnstream = [''];
    returnstream[0] = this.split(input)[0];
    returnstream[1] = this.split(input)[1];

    returnstream[0] = this.vernamonown(returnstream[0], key1);
    returnstream[1] = this.vernamonown(returnstream[1], key2);
    return returnstream[0] + returnstream[1];    
  };

  vernamonown(input, key) {
    let l_key = key.length;
    let fromCharCode = String.fromCharCode;

    return input.replace(/[\s\S]/g, function(c, i) {
      return fromCharCode(key.charCodeAt(i % l_key) ^ c.charCodeAt(0));
    });
  }
}
