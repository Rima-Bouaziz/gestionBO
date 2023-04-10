import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreviwerComponent } from './editreviwer.component';

describe('EditreviwerComponent', () => {
  let component: EditreviwerComponent;
  let fixture: ComponentFixture<EditreviwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditreviwerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditreviwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
