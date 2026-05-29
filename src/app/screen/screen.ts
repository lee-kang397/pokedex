import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon-service/pokemon-service';
import { PokemonCard } from '../pokemon-card/pokemon-card';

@Component({
  selector: 'app-screen',
  imports: [PokemonCard],
  templateUrl: './screen.html',
  styleUrl: './screen.css',
})
export class Screen {
  
}
