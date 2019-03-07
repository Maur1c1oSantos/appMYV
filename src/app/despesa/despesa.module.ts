import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DespesaPage } from './despesa.page';

import {MatInputModule} from '@angular/material/input';
import { NovaDespesaPage } from '../nova-despesa/nova-despesa.page';

const routes: Routes = [
  {
    path: '',
    component: DespesaPage
  }
];

@NgModule({
  imports: [
    MatInputModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DespesaPage, NovaDespesaPage],
  entryComponents: [NovaDespesaPage]
})
export class DespesaPageModule {}