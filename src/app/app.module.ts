import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GrowlModule } from 'primeng/primeng'

import { AppComponent } from './app.component';
import { NotiService } from './noti.service';
import { NotiComponent } from './noti/noti.component';
import { PocComponent } from './poc/poc.component';
import { NotiPrimengComponent } from './noti-primeng/noti-primeng.component'

@NgModule({
  declarations: [
    AppComponent,
    NotiComponent,
    PocComponent,
    NotiPrimengComponent
  ],
  imports: [
    BrowserModule,
    GrowlModule
  ],
  providers: [NotiService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
