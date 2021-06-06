import { Component, OnInit } from '@angular/core';
import { VigenereService } from 'src/app/services/vigenere.service';
import { saveAs } from 'file-saver';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vigenere',
  templateUrl: './vigenere.component.html',
  styleUrls: ['./vigenere.component.scss'],
})
export class VigenereComponent implements OnInit {
  isEncrypt: Boolean = true;
  isDecrypt: Boolean = false;
  keyword: string = '';
  dataUrlString;
  fileType;
  dataUrl;
  vigenereService;
  cipherText;
  plainText;
  isLinear = true;
  keyGroup: FormGroup;
  nameGroup: FormGroup;
  fileName;

  constructor(
    vigenereService: VigenereService,
    private _formBuilder: FormBuilder
  ) {
    this.vigenereService = vigenereService;
  }

  ngOnInit(): void {
    this.keyGroup = this._formBuilder.group({
      keyCtrl: ['', Validators.required],
    });
    this.nameGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
    });
  }

  encryptToggle() {
    this.isDecrypt = false;
    this.isEncrypt = true;
    this.keyword = '';
    this.fileName = '';
  }

  decryptToggle() {
    this.isEncrypt = false;
    this.isDecrypt = true;
    this.keyword = '';
    this.fileName = '';
  }

  getDataUrlString(value: string) {
    this.dataUrlString = value;
    this.fileType = this.dataUrlString.split(';base64,')[0];
  }

  encrypt() {
    console.log('Plaintext:' + this.dataUrlString);

    this.cipherText = this.vigenereService.vigenereEncrypt(
      this.dataUrlString,
      this.vigenereService.generateKey(this.dataUrlString, this.keyword)
    );
    console.log('Ciphertext:' + this.cipherText);

    let blob = new Blob([this.cipherText], { type: 'text/plain' });
    this.fileName += '.enc';
    saveAs(blob, this.fileName);
  }

  decrypt() {
    console.log('Ciphertext:' + this.dataUrlString);
    this.plainText = this.vigenereService.vigenereDecrypt(
      this.dataUrlString,
      this.vigenereService.generateKey(this.dataUrlString, this.keyword)
    );
    console.log('Plaintext:' + this.plainText);
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
