import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AlphacodeFormsComponent } from './alphacode-forms/alphacode-forms.component';
import { AlphacodeToolbarComponent } from './alphacode-toolbar/alphacode-toolbar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { AlphacodeCheckboxComponent } from './alphacode-checkbox/alphacode-checkbox.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AlphacodeFlatButtonComponent } from './alphacode-flat-button/alphacode-flat-button.component';
import {MatTableModule} from '@angular/material/table';
import { AlphacodeTableComponent } from './alphacode-table/alphacode-table.component';


@NgModule({
  declarations: [
    AppComponent,
    AlphacodeFormsComponent,
    AlphacodeToolbarComponent,
    AlphacodeCheckboxComponent,
    AlphacodeFlatButtonComponent,
    AlphacodeTableComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [
    provideClientHydration(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
