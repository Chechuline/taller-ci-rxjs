import { TestBed, inject } from '@angular/core/testing';

import { NotiService } from './noti.service';

describe('NotiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotiService]
    });
  });

  it('should be created', inject([NotiService], (service: NotiService) => {
    expect(service).toBeTruthy();
  }));

  it('should works',()=>{
    const service: NotiService = TestBed.get(NotiService);
    service.getNotification().subscribe(
      next => { 

      }
    )
  });
});
