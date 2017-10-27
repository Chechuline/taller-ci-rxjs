import { Component, OnInit } from '@angular/core';
import { NotiService } from '../noti.service';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {

  constructor(private notiService:NotiService) { }

  ngOnInit() {
  }
  triggerError(){ this.notiService.showError('Error','Error lanzado en poc')}
  triggerInfo(){ this.notiService.showInfo('Info','Info lanzado en poc')}
}
