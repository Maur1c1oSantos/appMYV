import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaVeiculoPage } from './tela-veiculo.page';
import { EditarVeiculoPage } from '../editar-veiculo/editar-veiculo.page';

const routes: Routes = [
  {
    path: '',
    component: TelaVeiculoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaVeiculoPage, EditarVeiculoPage],
  entryComponents: [EditarVeiculoPage]
})
export class TelaVeiculoPageModule {}
