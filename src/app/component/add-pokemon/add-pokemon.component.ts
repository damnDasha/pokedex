import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/Pokemon';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css'],
})
export class AddPokemonComponent implements OnInit {
  @Output() onAddPokemon: EventEmitter<Pokemon> = new EventEmitter();

  'title': string;
  'superpower': string;
  'age': string;
  showAddPokemon: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddPokemon = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.title) {
      alert('please add a name');
      return;
    }
    console.log('submit');
    const newPokemon = {
      title: this.title,
      superpower: this.superpower,
      age: this.age,
    };

    this.onAddPokemon.emit(newPokemon);

    this.title = '';
    this.superpower = '';
    this.age = '';
  }
}
