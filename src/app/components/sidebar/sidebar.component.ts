import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() toggleVigenere = new EventEmitter();
  @Output() toggleVernam = new EventEmitter();
  @Output() toggleTransposition = new EventEmitter();
  @Output() toggleOwnAlg = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  vigenereBtnClick() {
    this.toggleVigenere.emit();
  }

  vernamBtnClick() {
    this.toggleVernam.emit();
  }

  transpositionBtnClick() {
    this.toggleTransposition.emit();
  }

  ownAlgBtnClick() {
    this.toggleOwnAlg.emit();
  }
}
