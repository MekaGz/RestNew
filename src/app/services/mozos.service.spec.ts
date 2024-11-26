import { TestBed } from '@angular/core/testing';

import { MozosService } from './mozos.service';

describe('MozosService', () => {
  let service: MozosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MozosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
