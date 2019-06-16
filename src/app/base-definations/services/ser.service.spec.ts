import { TestBed } from '@angular/core/testing';

import { SerService } from './ser.service';

describe('SerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerService = TestBed.get(SerService);
    expect(service).toBeTruthy();
  });
});
