import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatCardModule, MatProgressBarModule, MatSlideToggleModule } from '@angular/material';

import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../../home/home.component';
import { ProfileComponent } from '../../profile/profile.component';
import { AlertsComponent } from '../../alerts/alerts.component';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';
import { CardComponent } from '../card/card.component';
import { AvailableBalanceComponent } from '../card/available-balance/available-balance.component';
import { CreditCardFooterComponent } from '../card/credit-card-footer/credit-card-footer.component';
import { DetailComponent } from '../card/detail/detail.component';

import { AppRoutingModule } from '../../app-routing.module';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        MatIconModule,
        MatSlideToggleModule,
        MatCardModule,
        MatProgressBarModule
      ],
      declarations: [
        LayoutComponent,
        HomeComponent,
        ProfileComponent,
        AlertsComponent,
        ProductDetailComponent,
        CardComponent,
        AvailableBalanceComponent,
        CreditCardFooterComponent,
        DetailComponent
      ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
