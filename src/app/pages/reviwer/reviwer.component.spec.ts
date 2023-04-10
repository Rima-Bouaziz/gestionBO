import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviwerComponent } from './reviwer.component';

describe('ReviwerComponent', () => {
  let component: ReviwerComponent;
  let fixture: ComponentFixture<ReviwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviwerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
