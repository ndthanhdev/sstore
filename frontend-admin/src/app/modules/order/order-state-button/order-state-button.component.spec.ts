import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStateButtonComponent } from './order-state-button.component';

describe('OrderStateButtonComponent', () => {
  let component: OrderStateButtonComponent;
  let fixture: ComponentFixture<OrderStateButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderStateButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
