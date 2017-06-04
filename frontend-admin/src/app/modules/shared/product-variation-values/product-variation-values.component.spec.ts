import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVariationValuesComponent } from './product-variation-values.component';

describe('ProductVariationValuesComponent', () => {
  let component: ProductVariationValuesComponent;
  let fixture: ComponentFixture<ProductVariationValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductVariationValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVariationValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
