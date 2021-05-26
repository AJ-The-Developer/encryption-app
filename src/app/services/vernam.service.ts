import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VernamService {
  plaintext: String = "Enterprise-wide incremental Graphic Interface";
  key: String = "jan";

  constructor() { }

  vernam(input, key) {
   
    let l_key = key.length;
    let fromCharCode = String.fromCharCode;

    let inputstream = input.toCharArray();
    let cipherstream = [inputstream.lenght];
    console.log(inputstream, cipherstream);
    
    /*
    return input.replace(/[\s\S]/g, function(c, i) {
      return fromCharCode(key.charCodeAt(i % l_key) ^ c.charCodeAt(0));
    });
    */

    
  };
}
