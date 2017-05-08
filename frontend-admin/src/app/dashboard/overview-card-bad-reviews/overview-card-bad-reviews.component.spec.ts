import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCardBadReviewsComponent } from './overview-card-bad-reviews.component';

describe('OverviewCardBadReviewsComponent', () => {
  let component: OverviewCardBadReviewsComponent;
  let fixture: ComponentFixture<OverviewCardBadReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCardBadReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCardBadReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
