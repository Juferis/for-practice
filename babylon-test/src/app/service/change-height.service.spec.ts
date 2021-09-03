import { TestBed } from '@angular/core/testing';

import { ChangeHeightService } from './change-height.service';

describe('ChangeHeightService', () => {
  let service: ChangeHeightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeHeightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
