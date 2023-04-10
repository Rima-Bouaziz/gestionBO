import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEtatComponent } from './editetat.component';

describe('EditetatComponent', () => {
  let component: EditEtatComponent;
  let fixture: ComponentFixture<EditEtatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEtatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
