import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDrinkComponent } from './create-drink.component';

describe('CreateDrinkComponent', () => {
  let component: CreateDrinkComponent;
  let fixture: ComponentFixture<CreateDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
