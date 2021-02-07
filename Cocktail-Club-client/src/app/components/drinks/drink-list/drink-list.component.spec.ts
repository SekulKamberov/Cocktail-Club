import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkListComponent } from './drink-list.component';

describe('DrinkListComponent', () => {
  let component: DrinkListComponent;
  let fixture: ComponentFixture<DrinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
