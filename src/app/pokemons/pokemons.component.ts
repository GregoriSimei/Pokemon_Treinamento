import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Pokemon } from '../pokemon';
import { PokemonServices } from '../pokemons.service';

@Component({
    selector: 'app-pokemons',
    templateUrl: './pokemons.component.html',
    styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit
{
    pokemon: Pokemon;
    name: string;

    pokemons: Pokemon[];
    

    constructor(private pokemonService : PokemonServices) {}

    ngOnInit()
    {
        this.getPokemons();
    }

    getPokemons()
    {
        this.pokemonService.getPokemonsDB()
            .subscribe(pokemon => this.pokemons = pokemon);
    }

    getPokemonAPI()
    {
        this.pokemonService.getPokemonAPI(this.name).subscribe(data =>{
            var defence = data.stats[3].base_stat;
            var attack = data.stats[4].base_stat;
            var life = data.stats[5].base_stat;
            var type = data.types[0].type.name;
            var idImg = "" + data.id;
            while(idImg.length < 3)
            {
                idImg = "0" + idImg;
            }
            this.pokemon = { "id": null, "name": this.name, "type": type ,"img": idImg, "attack": attack, "defence": defence, "life": life};
            this.postPokemonAPI(this.pokemon);
            this.getPokemons();
            this.getPokemons();
        });
    }
    
    postPokemonAPI(pokemon: Pokemon)
    {
        this.pokemonService.postPokemonBD(pokemon);
    }
}