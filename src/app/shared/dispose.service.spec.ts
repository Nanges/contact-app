import { TestBed } from '@angular/core/testing';

import { DisposeService } from './dispose.service';

describe('DisposeService', () => {
  let service: DisposeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisposeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
