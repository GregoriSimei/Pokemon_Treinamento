import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { BatalhaComponent } from './batalha/batalha.component';
import { TreinadorComponent } from './treinador/treinador.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'pokemons', component:  PokemonsComponent },
  { path: 'batalha', component: BatalhaComponent},
  { path: 'treinador', component: TreinadorComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
