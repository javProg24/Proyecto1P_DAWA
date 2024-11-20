import { TestBed } from '@angular/core/testing';

import { PerfilesjsonServiceService } from './perfilesjson-service.service';

describe('PerfilesjsonServiceService', () => {
  let service: PerfilesjsonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilesjsonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
