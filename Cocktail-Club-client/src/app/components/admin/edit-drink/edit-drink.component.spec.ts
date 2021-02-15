import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDrinkComponent } from './edit-drink.component';

describe('EditDrinkComponent', () => {
  let component: EditDrinkComponent;
  let fixture: ComponentFixture<EditDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
