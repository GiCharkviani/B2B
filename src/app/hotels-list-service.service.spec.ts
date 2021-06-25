import { TestBed } from '@angular/core/testing';

import { HotelsListServiceService } from './hotels-list-service.service';

describe('HotelsListServiceService', () => {
  let service: HotelsListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
