/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { RegistrarService } from './registrar.service';

describe('Service: Registrar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrarService]
    });
  });

  it('should ...', inject([RegistrarService], (service: RegistrarService) => {
    expect(service).toBeTruthy();
  }));
});
