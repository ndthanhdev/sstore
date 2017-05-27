import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCardTotalUserComponent } from './overview-card-total-user.component';

describe('OverviewCardTotalUserComponent', () => {
  let component: OverviewCardTotalUserComponent;
  let fixture: ComponentFixture<OverviewCardTotalUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCardTotalUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCardTotalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
