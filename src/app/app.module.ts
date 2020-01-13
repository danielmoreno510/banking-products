import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { AlertsComponent } from './alerts/alerts.component';

import { AuthenticationService } from './services/authentication.service';
import { AuthEffects } from './redux/effects/auth.effects';
import { ProductsEffects } from './redux/effects/products.effects';
import { authReducer } from './redux/reducers/auth.reducer';
import { ProductsReducer } from './redux/reducers/products.reducer';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
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
    StoreModule.forRoot({ auth: authReducer, products: ProductsReducer }),
    EffectsModule.forRoot([AuthEffects, ProductsEffects]),
    HomeModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
