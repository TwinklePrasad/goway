import { TestBed } from '@angular/core/testing';

import { GeneralSettingService } from './general-setting.service';

describe('GeneralSettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralSettingService = TestBed.get(GeneralSettingService);
    expect(service).toBeTruthy();
  });
});
