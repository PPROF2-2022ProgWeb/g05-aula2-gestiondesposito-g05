import { TestBed } from '@angular/core/testing';

import { PrestamoServService } from './prestamo-serv.service';

describe('PrestamoServService', () => {
  let service: PrestamoServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestamoServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
