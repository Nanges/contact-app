import { TestBed } from '@angular/core/testing';

import { AddBehaviorService } from './add-behavior.service';

describe('AddBehaviorService', () => {
  let service: AddBehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBehaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
