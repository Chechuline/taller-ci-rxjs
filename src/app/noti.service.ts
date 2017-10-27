import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Noti } from './noti'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotiService {

  notiSubject:Subject<Noti> = new Subject<Noti>();
  constructor() { }

  getNotification():Observable<Noti>{
    return this.notiSubject.asObservable();
  }

  showError(summary:string,detail:string){
    this.buildNotification('error',summary,detail)
  }
  showSucces(summary:string,detail:string){
    this.buildNotification('success',summary,detail)
  }
  showInfo(summary:string,detail:string){
    this.buildNotification('info',summary,detail)
  }
  showWarn(summary:string,detail:string){
    this.buildNotification('warning',summary,detail)
  }

  private buildNotification(severity:string, summary:string, detail:string){
    const NOTI: Noti = {severity,summary,detail}
    this.emitNotification(NOTI);

  }
  private emitNotification(noti:Noti){
    this.notiSubject.next(noti);
  }
}
