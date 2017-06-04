import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductVariantComponent } from './add-product-variant.component';

describe('AddProductVariantComponent', () => {
  let component: AddProductVariantComponent;
  let fixture: ComponentFixture<AddProductVariantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductVariantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
