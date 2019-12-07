import { TestBed } from '@angular/core/testing';

import { AdvGuardService } from './adv-guard.service';

describe('AdvGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvGuardService = TestBed.get(AdvGuardService);
    expect(service).toBeTruthy();
  });
});
