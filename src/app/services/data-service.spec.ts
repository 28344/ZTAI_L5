import { TestBed } from '@angular/core/testing';

import { DataSerivce } from './data-service';

describe('DataSerivceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSerivce = TestBed.get(DataSerivce);
    expect(service).toBeTruthy();
  });
});
