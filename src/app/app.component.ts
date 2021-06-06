import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'encryption-app';
  isVigenere = false;
  isVernam = false;
  isTransposition = false;
  isOwnAlg = false;

  toggleVigenere() {
    this.isVernam = false;
    this.isTransposition = false;
    this.isOwnAlg = false;
    this.isVigenere = true;
  }

  toggleVernam() {
    this.isVigenere = false;
    this.isTransposition = false;
    this.isOwnAlg = false;
    this.isVernam = true;
  }

  toggleTransposition() {
    this.isVigenere = false;
    this.isVernam = false;
    this.isOwnAlg = false;
    this.isTransposition = true;
  }

  toggleOwnAlg() {
    this.isVigenere = false;
    this.isVernam = false;
    this.isTransposition = false;
    this.isOwnAlg = true;
  }
}
