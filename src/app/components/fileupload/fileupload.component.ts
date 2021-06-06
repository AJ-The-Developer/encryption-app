import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss'],
})
export class FileuploadComponent implements OnInit {
  @Output() fileContentsEmitter = new EventEmitter();
  @Input() isEncrypt: string;

  constructor() {}

  ngOnInit(): void {}

  onFileSelected() {
    const inputFile: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.fileContentsEmitter.emit(e.target.result);
      };
      if (this.isEncrypt === 'true') reader.readAsDataURL(inputFile.files[0]);
      else reader.readAsText(inputFile.files[0]);
    }
  }
}
