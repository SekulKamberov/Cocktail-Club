import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkCardComponent } from './drink-card.component';

describe('DrinkCardComponent', () => {
  let component: DrinkCardComponent;
  let fixture: ComponentFixture<DrinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
