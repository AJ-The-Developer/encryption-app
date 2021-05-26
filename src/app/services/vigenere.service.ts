import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VigenereService {
  plaintext: string = "GEEKSFORGEEKS";
  keyword: string = "AYUSH";



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

  vigenereEncrypt(plaintext: string, keyword: string){
    plaintext = plaintext.toUpperCase()
    let ciphertext: string = '';

        
    
    for (let i = 0; i < plaintext.length; i++)
    {
        let pos1 = plaintext.charCodeAt(i);
        let pos2 = keyword.charCodeAt(i) - 65;
        let char = pos1 + pos2;
        if(char > 90) char -= 26;
        ciphertext += String.fromCharCode(char) 
    }
    return ciphertext;  

  }

  

}
