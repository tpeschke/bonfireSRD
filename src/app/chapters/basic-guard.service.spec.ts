import { TestBed } from '@angular/core/testing';

import { BasicGuardService } from './basic-guard.service';

describe('BasicGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicGuardService = TestBed.get(BasicGuardService);
    expect(service).toBeTruthy();
  });
});
