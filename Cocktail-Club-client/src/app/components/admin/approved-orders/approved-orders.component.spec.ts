import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedOrdersComponent } from './approved-orders.component';

describe('ApprovedOrdersComponent', () => {
  let component: ApprovedOrdersComponent;
  let fixture: ComponentFixture<ApprovedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
