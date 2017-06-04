import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomAttributeComponent } from './add-custom-attribute.component';

describe('AddCustomAttributeComponent', () => {
  let component: AddCustomAttributeComponent;
  let fixture: ComponentFixture<AddCustomAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
