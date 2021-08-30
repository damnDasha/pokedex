import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddPokemon: boolean = false;
  private subject = new Subject<any>();
  constructor() {}

  toggleAddPokemon(): void {
    this.showAddPokemon = !this.showAddPokemon;
    this.subject.next(this.showAddPokemon);
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
