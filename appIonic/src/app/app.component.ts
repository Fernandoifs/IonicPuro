import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página Inicial', url: '/inicial', icon: 'home' },
    { title: 'Agenda', url: '/agenda', icon: 'calendar' },
    { title: 'Clientes', url: '/clientes', icon: 'person' },
    { title: 'Cadastro', url: '/cadastro', icon: 'person-add' },
    { title: 'Controle de Contas', url: '/controle-de-contas', icon: 'cash' },
    { title: 'Controle de Estoque', url: '/controle-de-estoque', icon: 'file-tray' },
    { title: 'Importar Notas Fiscais', url: '/importar-notas', icon: 'download' },
    //{ title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    //{ title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    //{ title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    //{ title: 'Archived', url: '/folder/archived', icon: 'archive' },
    //{ title: 'Trash', url: '/folder/trash', icon: 'trash' },
    //{ title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends'];
  constructor() {}
}
