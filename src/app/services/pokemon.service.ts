import { Injectable } from '@angular/core';
import { Pokemon } from '../Pokemon';
import { POKEDEX } from '../mock-back'; //dont need this when server is live
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Declaration that marks a class as available to be provided and injected
//as a dependency.

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'http://localhost:8000/'; //change to real url when backend is live
  constructor(private http: HttpClient) {}

  getPokemon(): Observable<Pokemon[]> {
    const pokedex = of(POKEDEX);
    return pokedex;
    //when backend is live change to this:
    return this.http.get<Pokemon[]>(this.apiUrl);
  }
  deletePokemon(pokemon: Pokemon): Observable<Pokemon[]> {
    const url = `${this.apiUrl}/${pokemon.id}`;
    return this.http.delete<Pokemon[]>(url);
  }
}

// Observables are kind of like promises, but better because:
// they are declarative; computation does not start until subscription.
// Promises execute immediately on creation.
// This makes observables useful for defining recipes that can be run whenever you need the result.

// Observables provide many values.
// Promises provide one.
// This makes observables useful for getting multiple values over time.

//Observables differentiate between chaining and subscription.
// Promises only have .then() clauses.
// This makes observables useful for creating complex transformation recipes to be used by other part of the system,
// without causing the work to be executed.

//Observables subscribe() is responsible for handling errors.
// Promises push errors to the child promises.
// This makes observables useful for centralized and predictable error handling.
