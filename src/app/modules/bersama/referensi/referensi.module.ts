import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferensiRoutingModule } from './referensi-routing.module';
import { ReferensiComponent } from './referensi.component';
import { KppnComponent } from './kppn/kppn.component';
import { KanwilComponent } from './kanwil/kanwil.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { KPPNService } from './kppn/kppn.service';


@NgModule({
  declarations: [
    ReferensiComponent,
    KppnComponent,
    KanwilComponent
  ],
  imports: [
    CommonModule,
    ReferensiRoutingModule,
    SharedModule,
    FormsModule
  ],
providers:[
  KPPNService,
]
})
export class ReferensiModule { }
