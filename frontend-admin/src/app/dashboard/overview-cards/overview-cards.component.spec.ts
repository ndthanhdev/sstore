import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCardsComponent } from './overview-cards.component';

describe('OverviewCardsComponent', () => {
  let component: OverviewCardsComponent;
  let fixture: ComponentFixture<OverviewCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
