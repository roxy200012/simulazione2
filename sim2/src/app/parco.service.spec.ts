import { TestBed } from '@angular/core/testing';

import { ParcoService } from './parco.service';

describe('ParcoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParcoService = TestBed.get(ParcoService);
    expect(service).toBeTruthy();
  });
});
