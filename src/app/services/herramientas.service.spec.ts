import { TestBed } from '@angular/core/testing';

import { HerramientasService } from './herramientas.service';

describe('HerramientasService', () => {
  let service: HerramientasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerramientasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
