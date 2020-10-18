import { TestBed } from '@angular/core/testing';

import { FormRiskService } from './form-risk.service';

describe('FormRiskService', () => {
  let service: FormRiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
