import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewphotoComponent } from './viewphoto/viewphoto.component';
import { HttpClientModule } from '@angular/common/http'

const myroute:Routes=[
  {
    path:"",
    component:ViewphotoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewphotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
