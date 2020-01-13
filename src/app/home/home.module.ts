import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule, MatCardModule, MatProgressBarModule, MatSlideToggleModule } from '@angular/material';

import { HomeComponent } from './home.component';
import { CardComponent } from '../components/card/card.component';
import { AvailableBalanceComponent } from '../components/card/available-balance/available-balance.component';
import { CreditCardFooterComponent } from '../components/card/credit-card-footer/credit-card-footer.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { DetailComponent } from '../components/card/detail/detail.component';

import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    AvailableBalanceComponent,
    CreditCardFooterComponent,
    ProductDetailComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
