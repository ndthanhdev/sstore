import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAttributeItemComponent } from './custom-attribute-item.component';

describe('CustomAttributeItemComponent', () => {
  let component: CustomAttributeItemComponent;
  let fixture: ComponentFixture<CustomAttributeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAttributeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAttributeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
