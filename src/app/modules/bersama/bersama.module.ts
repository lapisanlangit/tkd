import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BersamaComponent } from './bersama.component';
import { BersamaRoutingModule } from './bersama-routing.module';



@NgModule({
  declarations: [
    BersamaComponent
  ],
  imports: [
    CommonModule,
    BersamaRoutingModule
  ]
})
export class BersamaModule { }
