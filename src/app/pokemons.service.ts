import { Injectable } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Observable, of, ObservableLike, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'accept': 'application/json' })};

@Injectable({ providedIn: 'root' })

export class PokemonServices
{

    constructor( private http: HttpClient ) { };

    getPokemons(): Observable<Pokemon[]>
    {
        return of(POKEMONS);
    }

    getPokemonsDB(): Observable<Pokemon[]>
    {
        return this.http.get<Pokemon[]>('http://localhost:8080/pokemon');
    }

    getPokemonAPI(name: string): Observable<any>
    {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/` + name);
    }

    postPokemonBD(pokemon: Pokemon)
    {
        this.http.post<Pokemon>("http://localhost:8080/pokemon", pokemon).subscribe(data => {},
        err => {
              console.log('Error: ' + err.error);
              console.log('Name: ' + err.name);
              console.log('Message: ' + err.message);
              console.log('Status: ' + err.status);
            });;
    }

}

