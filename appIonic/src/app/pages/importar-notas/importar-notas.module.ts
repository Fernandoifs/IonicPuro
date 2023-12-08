import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportarNotasPageRoutingModule } from './importar-notas-routing.module';

import { ImportarNotasPage } from './importar-notas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportarNotasPageRoutingModule
  ],
  declarations: [ImportarNotasPage]
})
export class ImportarNotasPageModule {}
