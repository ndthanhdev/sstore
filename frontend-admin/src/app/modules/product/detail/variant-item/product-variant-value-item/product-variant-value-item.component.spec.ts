import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVariantValueItemComponent } from './product-variant-value-item.component';

describe('ProductVariantValueItemComponent', () => {
  let component: ProductVariantValueItemComponent;
  let fixture: ComponentFixture<ProductVariantValueItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductVariantValueItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVariantValueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
