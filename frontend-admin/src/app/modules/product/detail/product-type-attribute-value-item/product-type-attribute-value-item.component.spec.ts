import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeAttributeValueItemComponent } from './product-type-attribute-value-item.component';

describe('ProductTypeAttributeValueItemComponent', () => {
  let component: ProductTypeAttributeValueItemComponent;
  let fixture: ComponentFixture<ProductTypeAttributeValueItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypeAttributeValueItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypeAttributeValueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
