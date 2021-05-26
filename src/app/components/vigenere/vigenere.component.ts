import { Component, OnInit } from '@angular/core';
import { VigenereService } from 'src/app/services/vigenere.service';

@Component({
  selector: 'app-vigenere',
  templateUrl: './vigenere.component.html',
  styleUrls: ['./vigenere.component.scss']
})
export class VigenereComponent implements OnInit {

  constructor(vigenereService: VigenereService) {
    let plaintext = vigenereService.plaintext;
    let keyword = vigenereService.keyword
    let key = vigenereService.generateKey(plaintext,keyword)

    let ciphertext = vigenereService.vigenereDecrypt(plaintext, key);

    console.log(plaintext);
    console.log(keyword);
    console.log(key);
    console.log(ciphertext);
    
    
    
    //let key = vigenereService.generateKey(vigenereService.plaintext, vigenereService.keyword)
    //console.log(key);
   }

  ngOnInit(): void {
  }

}
