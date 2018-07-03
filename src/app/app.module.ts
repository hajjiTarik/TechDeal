import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { CharactersiticsComponent } from './components/charactersitics/charactersitics.component';
import { DealsFeaturedComponent } from './components/deals-featured/deals-featured.component';
import { PopularCategoriesComponent } from './components/popular-categories/popular-categories.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { TrendsComponent } from './components/trends/trends.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';

import { GetItemsFromCacheService } from './services/get-items-from-cache.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    MainMenuComponent,
    BannerComponent,
    CharactersiticsComponent,
    DealsFeaturedComponent,
    PopularCategoriesComponent,
    NewArrivalsComponent,
    BestSellersComponent,
    TrendsComponent,
    ReviewsComponent,
    NewsletterComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GetItemsFromCacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
