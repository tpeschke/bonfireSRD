import { TestBed } from '@angular/core/testing';

import { NotReduxService } from './not-redux.service';

describe('NotReduxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotReduxService = TestBed.get(NotReduxService);
    expect(service).toBeTruthy();
  });
});
