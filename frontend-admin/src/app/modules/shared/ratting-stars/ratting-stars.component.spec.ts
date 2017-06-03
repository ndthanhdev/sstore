import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RattingStarsComponent } from './ratting-stars.component';

describe('RattingStarsComponent', () => {
  let component: RattingStarsComponent;
  let fixture: ComponentFixture<RattingStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RattingStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RattingStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
