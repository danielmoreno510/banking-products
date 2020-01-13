import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatCardModule, MatProgressBarModule, MatSlideToggleModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './components/card/card.component';
import { AvailableBalanceComponent } from './components/card/available-balance/available-balance.component';
import { CreditCardFooterComponent } from './components/card/credit-card-footer/credit-card-footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DetailComponent } from './components/card/detail/detail.component';
import { LayoutComponent } from './components/layout/layout.component';

import { AuthenticationService } from './services/authentication.service';
import { AuthEffects } from './redux/effects/auth.effects';
import { ProductsEffects } from './redux/effects/products.effects';
import { authReducer } from './redux/reducers/auth.reducer';
import { ProductsReducer } from './redux/reducers/products.reducer';
import { ProfileComponent } from './profile/profile.component';
import { AlertsComponent } from './alerts/alerts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    CardComponent,
    AvailableBalanceComponent,
    CreditCardFooterComponent,
    ProductDetailComponent,
    DetailComponent,
    ProfileComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    StoreModule.forRoot({ auth: authReducer, products: ProductsReducer }),
    EffectsModule.forRoot([AuthEffects, ProductsEffects])
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
