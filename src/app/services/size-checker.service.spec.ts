import { TestBed } from '@angular/core/testing';

import { SizeCheckerService } from './size-checker.service';

describe('SizeCheckerService', () => {
  let service: SizeCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizeCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
