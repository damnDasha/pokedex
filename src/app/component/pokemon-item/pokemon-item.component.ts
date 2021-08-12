import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/Pokemon';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css'],
})
export class PokemonItemComponent implements OnInit {
  @Input() 'pokemon': Pokemon;
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}
}
