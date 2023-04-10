import { TestBed } from '@angular/core/testing';

import { ReviwerService } from './reviwer.service';

describe('ReviwerService', () => {
  let service: ReviwerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviwerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
