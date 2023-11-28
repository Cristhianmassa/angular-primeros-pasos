import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/counter.module';
import { HeroeModule } from './heroes/heroe.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroeModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
