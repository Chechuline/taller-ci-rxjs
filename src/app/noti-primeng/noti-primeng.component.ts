import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Noti } from '../noti';

@Component({
  selector: 'app-noti-primeng',
  templateUrl: './noti-primeng.component.html',
  styleUrls: ['./noti-primeng.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotiPrimengComponent implements OnChanges {
  
  @Input() noti:Noti;
  notis: Noti[];

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.notis = [];
    this.notis= [...this.notis, this.noti];
  }
}
