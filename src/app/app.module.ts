import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContendorComponent } from './components/contendor/contendor.component';
import { ItemComponent } from './components/item/item.component';
import { CirculoComponent } from './components/circulo/circulo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContendorComponent,
    ItemComponent,
    CirculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
