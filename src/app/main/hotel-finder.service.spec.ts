import { TestBed } from '@angular/core/testing';

import { HotelFinderService } from './hotel-finder.service';

describe('HotelFinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelFinderService = TestBed.get(HotelFinderService);
    expect(service).toBeTruthy();
  });
});
