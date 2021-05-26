import { Component, OnInit } from '@angular/core';
import { VernamService } from 'src/app/services/vernam.service';

@Component({
  selector: 'app-vernam',
  templateUrl: './vernam.component.html',
  styleUrls: ['./vernam.component.scss']
})

export class VernamComponent implements OnInit {
  inputtext = 'thisistheteststring';
  keytext = 'mykey';
  outputtext = '';
  
  vernamService;

  constructor(vernamService: VernamService) {
    this.vernamService = vernamService;
  }

  ngOnInit(): void {}

  encryptload() {
    this.vernamService.vernam(this.inputtext, this.keytext);
    this.outputtext = this.vernamService.vernam(this.inputtext, this.keytext);
    console.log(this.inputtext);
    console.log(this.keytext);
    console.log(this.outputtext);
  }

  decryptload() {
    this.vernamService.vernam(this.outputtext, this.keytext);
    this.outputtext = this.vernamService.vernam(this.outputtext, this.keytext);
    console.log(this.inputtext);
    console.log(this.keytext);
    console.log(this.outputtext);
  }
}
