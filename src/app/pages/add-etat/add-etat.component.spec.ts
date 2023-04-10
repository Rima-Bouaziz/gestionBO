import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddetatComponent } from './add-etat.component';

describe('AddetatComponent', () => {
  let component: AddetatComponent;
  let fixture: ComponentFixture<AddetatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddetatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddetatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
