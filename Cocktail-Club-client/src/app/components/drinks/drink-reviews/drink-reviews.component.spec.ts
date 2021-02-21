import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkReviewsComponent } from './drink-reviews.component';

describe('DrinkReviewsComponent', () => {
  let component: DrinkReviewsComponent;
  let fixture: ComponentFixture<DrinkReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
