import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearderModule } from './componets/layout/hearder/hearder.module';
import { ProductCardModule } from './componets/product-card/product-card.module';
import { HomeModule } from './pages/home/home.module';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { HttpClientModule, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    HomeModule,
    HearderModule,
    ProductCardModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:    [
    // ************************************
    { provide: LOCALE_ID, useValue: 'pt' },
    // ************************************
  ],
})
export class AppModule { }
