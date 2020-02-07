import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TreinadorServices } from "../TreinadorServices";
import { Treinador } from '../treinador';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-treinador',
  templateUrl: './treinador.component.html',
  styleUrls: ['./treinador.component.css']
})
export class TreinadorComponent implements OnInit {

  treinadores: Treinador[];
  
  selectedPokemon: Pokemojrtgiro;
  selectedPokemon2: Pokemon;
  activeDefence1 = false;
  activeDefence2 = false; 
  treinador1: number;
  treinador2: number;
  
  constructor(private treinadorService: TreinadorServices) {
    
   }

  ngOnInit() 
  {
    this.getTreinador();
  }

  getTreinador()
  { 
    this.treinadorService.getTreinadores()
            .subscribe(treinador => this.treinadores = treinador);
            this.treinador1 = this.treinadores[0].id;
            this.treinador2 = this.treinadores[1].id;
  }

  onSeletPokemon(pokemon:Pokemon, treinador:Treinador)
    {
      console.log(treinador.id)
        if(this.treinador1 == treinador.id)
        {
            this.selectedPokemon = pokemon;
        }
        else
        {
            this.selectedPokemon2 = pokemon;
        }
    }

    removeSelectedPokemon(){
        this.selectedPokemon = null;
    }

    removeSelectedPokemon2(){
        this.selectedPokemon2 = null;
    }

    attackPokemon2()
    {
        if(this.activeDefence1)
        {
            if((this.selectedPokemon.defence - this.selectedPokemon2.attack) < 0)
            {
                this.selectedPokemon.life -= (this.selectedPokemon2.attack - this.selectedPokemon.defence);
                this.selectedPokemon.defence = 0;
                this.activeDefence1 = false;
            }
            else
            {
                this.selectedPokemon.defence -= this.selectedPokemon2.attack;
            }
        }
        else
        {
            if((this.selectedPokemon.life - this.selectedPokemon2.attack) < 0)
            {
                this.selectedPokemon.life = 0;
            }
            else
            {
                this.selectedPokemon.life -= this.selectedPokemon2.attack
            }
        }
    }

    attackPokemon1()
    {
        if(this.activeDefence2)
        {
            if((this.selectedPokemon2.defence - this.selectedPokemon.attack) < 0)
            {
                this.selectedPokemon2.life -= (this.selectedPokemon.attack - this.selectedPokemon2.defence);
                this.selectedPokemon2.defence = 0;
                this.activeDefence2 = false;
            }
            else
            {
                this.selectedPokemon2.defence -= this.selectedPokemon.attack;
            }
        }
        else
        {
            if((this.selectedPokemon2.life - this.selectedPokemon.attack) < 0)
            {
                this.selectedPokemon2.life = 0;
            }
            else
            {
                this.selectedPokemon2.life -= this.selectedPokemon.attack;
            }  
        }
        
    }

    activeDefencePokemon1()
    {
        if(this.selectedPokemon.defence > 0)
        {
            this.activeDefence1 = true;
        }
    }

    activeDefencePokemon2()
    {
        if(this.selectedPokemon2.defence > 0)
        {
            this.activeDefence2 = true;
        }
    }

}
