import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';

import { MuralVagasComponent } from './mural-vagas/mural-vagas.component';
import { PainelComponent } from './painel/painel.component';

const rotas: Routes = [
  {path: 'mural', component: MuralVagasComponent},
  {path: 'painel', component: PainelComponent},
  {path: '', redirectTo: '/mural', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
