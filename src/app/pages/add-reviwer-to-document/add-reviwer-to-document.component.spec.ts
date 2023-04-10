import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviwerToDocumentComponent } from './add-reviwer-to-document.component';

describe('AddReviwerToDocumentComponent', () => {
  let component: AddReviwerToDocumentComponent;
  let fixture: ComponentFixture<AddReviwerToDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReviwerToDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReviwerToDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
