import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatButtonModule, MatCardModule, MatProgressBarModule, MatSlideToggleModule } from '@angular/material';


import { CreditCardFooterComponent } from './credit-card-footer.component';

describe('CreditCardFooterComponent', () => {
  let component: CreditCardFooterComponent;
  let fixture: ComponentFixture<CreditCardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule,
        MatSlideToggleModule
      ],
      declarations: [
        CreditCardFooterComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
