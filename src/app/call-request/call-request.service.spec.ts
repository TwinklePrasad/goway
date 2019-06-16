import { TestBed } from '@angular/core/testing';

import { CallRequestService } from './call-request.service';

describe('CallRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallRequestService = TestBed.get(CallRequestService);
    expect(service).toBeTruthy();
  });
});
