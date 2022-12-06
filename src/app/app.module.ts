import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProdDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> b9235e899db494f7e10c50f782830798c5c55c19
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
