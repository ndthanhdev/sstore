import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarUtilitiesComponent } from './nav-bar-utilities.component';

describe('NavBarUtilitiesComponent', () => {
  let component: NavBarUtilitiesComponent;
  let fixture: ComponentFixture<NavBarUtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarUtilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
