import { TestBed } from '@angular/core/testing';

import { CounrtyservicesService } from './counrtyservices.service';

describe('CounrtyservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CounrtyservicesService = TestBed.get(CounrtyservicesService);
    expect(service).toBeTruthy();
  });
});
