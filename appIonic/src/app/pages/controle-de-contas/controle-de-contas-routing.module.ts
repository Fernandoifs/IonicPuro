import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControleDeContasPage } from './controle-de-contas.page';

const routes: Routes = [
  {
    path: '',
    component: ControleDeContasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControleDeContasPageRoutingModule {}
