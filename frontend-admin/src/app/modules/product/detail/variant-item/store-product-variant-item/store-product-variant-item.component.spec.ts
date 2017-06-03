import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductVariantItemComponent } from './store-product-variant-item.component';

describe('StoreProductVariantItemComponent', () => {
  let component: StoreProductVariantItemComponent;
  let fixture: ComponentFixture<StoreProductVariantItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProductVariantItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductVariantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
