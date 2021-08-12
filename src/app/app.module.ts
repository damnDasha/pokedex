import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AddPokemonComponent } from './component/add-pokemon/add-pokemon.component';
import { ButtonComponent } from './component/button/button.component';
import { PokemonComponent } from './component/pokemon/pokemon.component';
import { PokemonItemComponent } from './component/pokemon-item/pokemon-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddPokemonComponent,
    ButtonComponent,
    PokemonComponent,
    PokemonItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
