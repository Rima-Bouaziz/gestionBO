import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviwerComponent } from './add-reviwer.component';

describe('AddReviwerComponent', () => {
  let component: AddReviwerComponent;
  let fixture: ComponentFixture<AddReviwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReviwerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReviwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
