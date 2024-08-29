import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { IntroModule } from './intro/intro.module';
import { OutletModule } from './outlet-component/outlet.module';
import { GamesModule } from '../games/games.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    OutletModule,
    IntroModule,
    BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
