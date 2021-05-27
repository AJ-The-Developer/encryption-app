import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  dataUrl;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected() {
    const inputFile: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        
        let fileContents = e.target.result.split(',');
        this.dataUrl = fileContents;
        console.log();
        
        // console.log(this.fileCountents.split('.'));
        
        // var uint8 = new Uint8Array(this.fileContents);

        // var myBlob = new Blob([uint8], {type: 'text/plain'});
        
        // console.log(myBlob);
        // writeFile('example.jpeg', 'b', this.fileContents)

        // console.log(uint8);
        
        // console.log(uint8.reduce((binary, uint8) => binary + uint8.toString(2), ""));
      };

      reader.readAsDataURL(inputFile.files[0]);
    }
  }

}
