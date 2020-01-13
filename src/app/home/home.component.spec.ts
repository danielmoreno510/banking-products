import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { MatIconModule, MatButtonModule, MatCardModule, MatProgressBarModule, MatSlideToggleModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { CardComponent } from '../components/card/card.component';
import { AvailableBalanceComponent } from '../components/card/available-balance/available-balance.component';
import { CreditCardFooterComponent } from '../components/card/credit-card-footer/credit-card-footer.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { DetailComponent } from '../components/card/detail/detail.component';
import { ProfileComponent } from '../profile/profile.component';
import { AlertsComponent } from '../alerts/alerts.component';
import { AppRoutingModule } from '../app-routing.module';

import * as fromRoot from '../redux/selectors/products.selector';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: Store<fromRoot.ProductState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        AppRoutingModule,
        StoreModule,
        HttpClientModule
      ],
      declarations: [
        HomeComponent,
        CardComponent,
        AvailableBalanceComponent,
        CreditCardFooterComponent,
        ProductDetailComponent,
        DetailComponent,
        ProfileComponent,
        AlertsComponent
      ],
      providers: [
        {
          provide: Store,
          useClass: fromRoot,
          useValue: {
            dispatch: () => spyOn(store, 'dispatch'),
            pipe: () => spyOn(store, 'pipe'),
            subscribe: () => spyOn(store, 'subscribe')
          }
        }
      ]
    })
    .compileComponents();
  }));
  
  beforeEach(inject([Store], (testStore: Store<fromRoot.ProductState>) => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
