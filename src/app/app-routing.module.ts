import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { BatalhaComponent } from './batalha/batalha.component';
import { TreinadorComponent } from './treinador/treinador.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login' },
  { path: 'pokemons', component:  PokemonsComponent },
  { path: 'batalha', component: BatalhaComponent},
  { path: 'treinador', component: TreinadorComponent},
  { path: 'login', component: LoginComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
