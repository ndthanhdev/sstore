import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductSummaryListComponent} from './product-summary-list.component';

describe('ProductSummaryListComponent', () => {
  let component: ProductSummaryListComponent;
  let fixture: ComponentFixture<ProductSummaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSummaryListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
