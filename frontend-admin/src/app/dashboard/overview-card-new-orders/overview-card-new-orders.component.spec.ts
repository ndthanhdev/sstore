import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCardNewOrdersComponent } from './overview-card-new-orders.component';

describe('OverviewCardNewOrdersComponent', () => {
  let component: OverviewCardNewOrdersComponent;
  let fixture: ComponentFixture<OverviewCardNewOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCardNewOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCardNewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
