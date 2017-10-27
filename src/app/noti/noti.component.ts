import { Component, OnInit } from '@angular/core';
import { NotiService } from '../noti.service';
import { Observable } from 'rxjs/Observable';
import { Noti } from '../noti';

@Component({
  selector: 'app-noti',
  templateUrl: './noti.component.html',
  styleUrls: ['./noti.component.css']
})
export class NotiComponent implements OnInit {
  
  private noti$:Observable<Noti>;

  constructor(private notiService:NotiService) { }

  ngOnInit() {
    this.noti$ = this.notiService.getNotification()
  }

}
