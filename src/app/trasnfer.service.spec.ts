import { TestBed } from '@angular/core/testing';

import { TrasnferService } from './trasnfer.service';

describe('TrasnferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrasnferService = TestBed.get(TrasnferService);
    expect(service).toBeTruthy();
  });
});
