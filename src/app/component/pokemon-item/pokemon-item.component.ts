import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/Pokemon';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css'],
})
export class PokemonItemComponent implements OnInit {
  @Input() 'pokemon': Pokemon;
  @Output() onDeletePokemon: EventEmitter<Pokemon> = new EventEmitter();
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onDelete(pokemon) {
    this.onDeletePokemon.emit(pokemon);
  }
}
