import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Screen } from './screen/screen';
import { PokemonCard } from './pokemon-card/pokemon-card';
import { Dpad } from './dpad/dpad';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Screen, PokemonCard, Dpad],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokedex');
}
