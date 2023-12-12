import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes = [
    { id: 1, nome: 'Mark', telefone: 'Otto', pedido: '@mdo' },
    { id: 2, nome: 'Jacob', telefone: 'Thornton', pedido: '@fat' },
    { id: 3, nome: 'Larry', telefone: 'the Bird', pedido: '@twitter' },
  ];

  constructor() {}

  ngOnInit() {
  }
  editarCliente(){}
  apagarCliente(){}
}
