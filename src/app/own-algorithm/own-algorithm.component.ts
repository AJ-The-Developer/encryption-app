import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';
import { OwnAlgorithmService } from '../services/own-algorithm.service';

@Component({
  selector: 'app-own-algorithm',
  templateUrl: './own-algorithm.component.html',
  styleUrls: ['./own-algorithm.component.scss']
})
export class OwnAlgorithmComponent implements OnInit {
  inputtext = 'hello';
  outputtext = '';
  outputarr = [''];
  keys=[''];
  key1='';
  key2='';
  
  ownService;

  constructor(ownService: OwnAlgorithmService) {
    this.ownService = ownService;
  }

  ngOnInit(): void {}

  encryptload() {
    this.keys = this.ownService.generateKey(this.inputtext);
    this.outputarr = this.ownService.ownEnc(this.inputtext, this.keys);
    this.outputtext = this.outputarr[0] + this.outputarr[1];
    console.log(this.keys[0]);
    console.log(this.keys[1]);
    
    console.log(this.inputtext);
    console.log(this.outputarr);
    console.log(this.outputtext);
    
  }

  decryptload() {
    console.log(this.inputtext);
    console.log(this.ownService.ownDec(this.inputtext, this.key1, this.key2));
  }
}
