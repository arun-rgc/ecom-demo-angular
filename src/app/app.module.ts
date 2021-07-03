import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductCardOneComponent } from './component/product-card-one/product-card-one.component';
import { BannerComponent } from './component/banner/banner.component';
import { DealsComponent } from './component/deals/deals.component';
import { DealCardOneComponent } from './component/deal-card-one/deal-card-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardOneComponent,
    BannerComponent,
    DealsComponent,
    DealCardOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
