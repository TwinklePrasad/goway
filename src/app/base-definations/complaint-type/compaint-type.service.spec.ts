import { TestBed } from '@angular/core/testing';

import { CompaintTypeService } from './compaint-type.service';

describe('CompaintTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompaintTypeService = TestBed.get(CompaintTypeService);
    expect(service).toBeTruthy();
  });
});
