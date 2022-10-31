import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

{
    path:'referensi',
    loadChildren:()=> import('./referensi/referensi.module').then(mod=>mod.ReferensiModule)
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BersamaRoutingModule { }
