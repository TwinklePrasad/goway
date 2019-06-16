import { TestBed } from '@angular/core/testing';

import { PaymentRequestService } from './payment-request.service';

describe('PaymentRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentRequestService = TestBed.get(PaymentRequestService);
    expect(service).toBeTruthy();
  });
});
