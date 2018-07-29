import { TestBed, inject } from '@angular/core/testing';

import { AppRouteReuseStrategyServiceService } from './app-route-reuse-strategy-service.service';

describe('AppRouteReuseStrategyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppRouteReuseStrategyServiceService]
    });
  });

  it('should be created', inject([AppRouteReuseStrategyServiceService], (service: AppRouteReuseStrategyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
