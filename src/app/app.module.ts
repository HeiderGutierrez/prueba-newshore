import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { OffersComponent } from './offers/offers.component';
import { OffersCardComponent } from './offers/offers-card/offers-card.component';
import { BannerFixedComponent } from './banner-fixed/banner-fixed.component';
import { CtaComponent } from './banner/cta/cta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    OffersComponent,
    OffersCardComponent,
    BannerFixedComponent,
    CtaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
