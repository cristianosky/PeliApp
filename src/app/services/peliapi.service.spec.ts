import { TestBed } from '@angular/core/testing';

import { PeliapiService } from './peliapi.service';

describe('PeliapiService', () => {
  let service: PeliapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
