import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatButtonModule, MatCardModule, MatProgressBarModule, MatSlideToggleModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../../app-routing.module';
import { HomeComponent } from '../../home/home.component';
import { CardComponent } from './card.component';
import { ProfileComponent } from '../../profile/profile.component';
import { AlertsComponent } from '../../alerts/alerts.component';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';
import { AvailableBalanceComponent } from '../../components/card/available-balance/available-balance.component';
import { CreditCardFooterComponent } from '../../components/card/credit-card-footer/credit-card-footer.component';
import { DetailComponent } from '../../components/card/detail/detail.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        AppRoutingModule,
        HttpClientModule
      ],
      declarations: [
        CardComponent,
        HomeComponent,
        ProfileComponent,
        AlertsComponent,
        ProductDetailComponent,
        AvailableBalanceComponent,
        CreditCardFooterComponent,
        DetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
