import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'inicial',
    loadChildren: () => import('./pages/inicial/inicial.module').then( m => m.InicialPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'controle-de-contas',
    loadChildren: () => import('./pages/controle-de-contas/controle-de-contas.module').then( m => m.ControleDeContasPageModule)
  },
  {
    path: 'controle-de-estoque',
    loadChildren: () => import('./pages/controle-de-estoque/controle-de-estoque.module').then( m => m.ControleDeEstoquePageModule)
  },
  {
    path: 'importar-notas',
    loadChildren: () => import('./pages/importar-notas/importar-notas.module').then( m => m.ImportarNotasPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then( m => m.ClientesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
