import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { VigenereComponent } from './components/vigenere/vigenere.component';
import { VernamComponent } from './components/vernam/vernam.component';
import { TranspositionComponent } from './components/transposition/transposition.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, VigenereComponent, VernamComponent, TranspositionComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
