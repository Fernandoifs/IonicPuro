import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControleDeContasPageRoutingModule } from './controle-de-contas-routing.module';

import { ControleDeContasPage } from './controle-de-contas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControleDeContasPageRoutingModule
  ],
  declarations: [ControleDeContasPage]
})
export class ControleDeContasPageModule {}
