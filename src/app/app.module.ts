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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { OwnAlgorithmComponent } from './own-algorithm/own-algorithm.component';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    VigenereComponent,
    VernamComponent,
    TranspositionComponent,
    FileuploadComponent,
    OwnAlgorithmComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonToggleModule,
    MatStepperModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
