import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantItemComponent } from './variant-item.component';

describe('VariantItemComponent', () => {
  let component: VariantItemComponent;
  let fixture: ComponentFixture<VariantItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariantItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
