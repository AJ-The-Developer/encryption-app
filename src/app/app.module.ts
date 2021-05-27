import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { VigenereComponent } from './components/vigenere/vigenere.component';
import { VernamComponent } from './components/vernam/vernam.component';
import { TranspositionComponent } from './components/transposition/transposition.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { OwnAlgorithmComponent } from './own-algorithm/own-algorithm.component'

@NgModule({
  declarations: [AppComponent, SidebarComponent, VigenereComponent, VernamComponent, TranspositionComponent, FileuploadComponent, OwnAlgorithmComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, MatInputModule, FormsModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
