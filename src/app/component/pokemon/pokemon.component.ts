import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokedex: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemon()
      .subscribe((pokedex) => (this.pokedex = pokedex));
  }
}

//void mean it does not return anything
