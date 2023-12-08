import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportarNotasPage } from './importar-notas.page';

const routes: Routes = [
  {
    path: '',
    component: ImportarNotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportarNotasPageRoutingModule {}
