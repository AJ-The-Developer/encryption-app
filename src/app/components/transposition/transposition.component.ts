import { Component, OnInit } from '@angular/core';
import { TranspositionService } from 'src/app/services/transposition.service';

@Component({
  selector: 'app-transposition',
  templateUrl: './transposition.component.html',
  styleUrls: ['./transposition.component.scss']
})
export class TranspositionComponent implements OnInit {

  constructor(transpostionservice: TranspositionService) {
    console.log(transpostionservice.encrypt('Hello World', 'zebra'.toUpperCase(), ' '));
    console.log(transpostionservice.decrypt("ol lo eW lr H d", "zebra".toUpperCase()));
  }

  ngOnInit(): void {
  }

}
