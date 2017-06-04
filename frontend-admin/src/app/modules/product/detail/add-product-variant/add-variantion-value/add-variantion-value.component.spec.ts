import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVariantionValueComponent } from './add-variantion-value.component';

describe('AddVariantionValueComponent', () => {
  let component: AddVariantionValueComponent;
  let fixture: ComponentFixture<AddVariantionValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVariantionValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVariantionValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
