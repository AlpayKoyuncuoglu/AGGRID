import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { ButtonRendererComponent } from './renderer/button.renderer.componen';

@NgModule({
  declarations: [
    AppComponent,
    ButtonRendererComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
