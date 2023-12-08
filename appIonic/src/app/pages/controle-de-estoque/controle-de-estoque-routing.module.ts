import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControleDeEstoquePage } from './controle-de-estoque.page';

const routes: Routes = [
  {
    path: '',
    component: ControleDeEstoquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControleDeEstoquePageRoutingModule {}
