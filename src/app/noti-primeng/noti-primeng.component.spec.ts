import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiPrimengComponent } from './noti-primeng.component';

describe('NotiPrimengComponent', () => {
  let component: NotiPrimengComponent;
  let fixture: ComponentFixture<NotiPrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiPrimengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
