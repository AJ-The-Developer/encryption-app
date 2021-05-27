import { Component, OnInit } from '@angular/core';
import { VernamService } from 'src/app/services/vernam.service';

@Component({
  selector: 'app-vernam',
  templateUrl: './vernam.component.html',
  styleUrls: ['./vernam.component.scss']
})

export class VernamComponent implements OnInit {
  inputtext = 'aaaabbbb';
  keytext = 'jan';
  outputtext = '';
  
  vernamService;

  constructor(vernamService: VernamService) {
    this.vernamService = vernamService;
  }

  ngOnInit(): void {}

  encryptload() {
    console.log(this.inputtext);
    console.log(this.keytext);
    console.log(this.vernamService.generateKey(this.inputtext, this.keytext));
    console.log(this.vernamService.vernam(this.inputtext, this.vernamService.generateKey(this.inputtext, this.keytext)))
  }

  decryptload() {
    console.log(this.inputtext);
    console.log(this.keytext);
    console.log(this.vernamService.generateKey(this.inputtext, this.keytext));
    console.log(this.vernamService.vernam(this.inputtext, this.vernamService.generateKey(this.inputtext, this.keytext)));
  }
}
