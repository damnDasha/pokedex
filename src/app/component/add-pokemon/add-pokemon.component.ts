import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css'],
})
export class AddPokemonComponent implements OnInit {
  'title': string;
  'superpower': string;
  'age': string;

  constructor() {}

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
  }
}
