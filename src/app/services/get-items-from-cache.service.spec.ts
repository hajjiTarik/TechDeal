import { TestBed, inject } from '@angular/core/testing';

import { GetItemsFromCacheService } from './get-items-from-cache.service';

describe('GetItemsFromCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetItemsFromCacheService]
    });
  });

  it('should be created', inject([GetItemsFromCacheService], (service: GetItemsFromCacheService) => {
    expect(service).toBeTruthy();
  }));
});
