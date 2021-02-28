import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinkDeleteModalComponent } from './drink-delete-modal.component';

describe('DrinkDeleteModalComponent', () => {
  let component: DrinkDeleteModalComponent;
  let fixture: ComponentFixture<DrinkDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkDeleteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
