import { TestBed } from '@angular/core/testing';

import { TodmService } from './todm.service';

describe('TodmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodmService = TestBed.get(TodmService);
    expect(service).toBeTruthy();
  });
});
