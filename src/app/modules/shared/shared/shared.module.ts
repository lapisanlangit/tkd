import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './interceptor';
import { AjaxLoadingComponent } from '../ajax/ajax-loading.component';
import { PesanComponent } from '../pesan/pesan-component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({

  imports: [
    CommonModule,
  ],
  declarations: [
    AjaxLoadingComponent,
    PesanComponent
  ],
  providers:[
    httpInterceptorProviders
  ],
  exports:[
    AjaxLoadingComponent,PesanComponent  ]
})
export class SharedModule { }
