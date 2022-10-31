import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanwilComponent } from './kanwil/kanwil.component';
import { KppnComponent } from './kppn/kppn.component';

const routes: Routes = [
  {
    path: 'kppn',
    component: KppnComponent,
  },
  {
    path: 'kanwil',
    component: KanwilComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferensiRoutingModule { }
