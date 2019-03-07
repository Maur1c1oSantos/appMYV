import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'novo-usuario', loadChildren: './novo-usuario/novo-usuario.module#NovoUsuarioPageModule' },
  { path: 'garagem', loadChildren: './garagem/garagem.module#GaragemPageModule' },
  { path: 'tela-veiculo', loadChildren: './tela-veiculo/tela-veiculo.module#TelaVeiculoPageModule' },
  { path: 'manutencao', loadChildren: './manutencao/manutencao.module#ManutencaoPageModule' },
  { path: 'despesa', loadChildren: './despesa/despesa.module#DespesaPageModule' },
  { path: 'tela-manutencao', loadChildren: './tela-manutencao/tela-manutencao.module#TelaManutencaoPageModule' },
  { path: 'abastecimento', loadChildren: './abastecimento/abastecimento.module#AbastecimentoPageModule' },  { path: 'tela-despesa', loadChildren: './tela-despesa/tela-despesa.module#TelaDespesaPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
