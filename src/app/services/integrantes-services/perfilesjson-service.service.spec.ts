import { TestBed } from '@angular/core/testing';

import { PerfilesjsonService } from './perfilesjson-service.service';

describe('PerfilesjsonServiceService', () => {
  let service: PerfilesjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilesjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
