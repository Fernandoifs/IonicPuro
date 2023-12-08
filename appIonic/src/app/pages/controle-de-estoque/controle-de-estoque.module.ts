import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControleDeEstoquePageRoutingModule } from './controle-de-estoque-routing.module';

import { ControleDeEstoquePage } from './controle-de-estoque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControleDeEstoquePageRoutingModule
  ],
  declarations: [ControleDeEstoquePage]
})
export class ControleDeEstoquePageModule {}
