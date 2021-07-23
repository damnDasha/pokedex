import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/Pokemon';
import { POKEDEX } from 'src/app/mock-back';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokedex: Pokemon[] = POKEDEX;
  constructor() {}

  ngOnInit(): void {}
}
