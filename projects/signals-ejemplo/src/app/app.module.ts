import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './components/componente-1/componente-1.component';
import { Componente2Component } from './components/componente-2/componente-2.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [AppComponent, Componente1Component, Componente2Component],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
