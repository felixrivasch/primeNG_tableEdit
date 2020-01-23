import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    TableModule,
    ButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
