import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Screen } from './screen/screen';
import { PokemonCard } from './pokemon-card/pokemon-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Screen, PokemonCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokedex');
}
