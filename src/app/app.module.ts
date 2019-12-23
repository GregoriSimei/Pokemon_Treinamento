import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { PokemonsComponent }   from './pokemons/pokemons.component';
import { TreinadorComponent } from './treinador/treinador.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BatalhaComponent } from './batalha/batalha.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PokemonsComponent,
    TreinadorComponent,
    BatalhaComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
