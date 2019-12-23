import { Component } from '@angular/core';
import { Treinador } from './treinador';
import { TREINADORES } from './mock-treinador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  
  treinador : Treinador = TREINADORES[0];
  
  title = 'Batalha de Pokemons';

}
