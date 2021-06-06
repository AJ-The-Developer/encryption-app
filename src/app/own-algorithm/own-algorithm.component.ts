import { Component, OnInit } from '@angular/core';
import { OwnAlgorithmService } from '../services/own-algorithm.service';
import { saveAs } from 'file-saver';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-own-algorithm',
  templateUrl: './own-algorithm.component.html',
  styleUrls: ['./own-algorithm.component.scss'],
})
export class OwnAlgorithmComponent implements OnInit {
  isEncrypt: Boolean = true;
  isDecrypt: Boolean = false;
  keyword1: string = '';
  keyword2: string = '';
  keys = [''];
  dataUrlString;
  fileType;
  dataUrl;
  outputArr = [''];
  ownService;
  cipherText;
  plainText;
  isLinear = true;
  keyGroup: FormGroup;
  nameGroup: FormGroup;
  fileName;

  constructor(
    ownService: OwnAlgorithmService,
    private _formBuilder: FormBuilder
  ) {
    this.ownService = ownService;
  }

  ngOnInit(): void {
    this.keyGroup = this._formBuilder.group({
      key1Ctrl: ['', Validators.required],
      key2Ctrl: ['', Validators.required],
    });
    this.nameGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
    });
  }

  encryptToggle() {
    this.isDecrypt = false;
    this.isEncrypt = true;
    this.keyword1 = '';
    this.keyword2 = '';
    this.fileName = '';
  }

  decryptToggle() {
    this.isEncrypt = false;
    this.isDecrypt = true;
    this.keyword1 = '';
    this.keyword2 = '';
    this.fileName = '';
  }

  getDataUrlString(value: string) {
    this.dataUrlString = value;
    this.fileType = this.dataUrlString.split(';base64,')[0];
  }

  encrypt() {
    if (this.dataUrlString) {
      console.log('Plaintext: ', this.dataUrlString);
      this.keys = this.ownService.generateKey(this.dataUrlString);
      this.keyword1 = this.keys[0].substring(0, 10);
      this.keyword2 = this.keys[1].substring(0, 10);
      this.outputArr = this.ownService.ownEnc(this.dataUrlString, this.keys);
      this.cipherText = this.outputArr[0] + this.outputArr[1];
      console.log('Ciphertext: ', this.cipherText);

      let blob = new Blob([this.cipherText], { type: 'text/plain' });
      this.fileName += '.enc';
      saveAs(blob, this.fileName);
    } else {
      window.alert('Please choose a file to encrypt!');
    }
  }

  decrypt() {
    console.log('Ciphertext: ', this.dataUrlString);

    this.plainText = this.ownService.ownDec(
      this.dataUrlString,
      this.keyword1,
      this.keyword2
    );

    console.log('Plaintext: ', this.plainText);

    let blob = this.dataURLtoBlob(this.plainText);
    saveAs(blob, this.fileName);
  }

  dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }
}
