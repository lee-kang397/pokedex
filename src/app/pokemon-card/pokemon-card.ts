import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon-service/pokemon-service';
import { Pokemon } from '../pokemon-service/pokemon-service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css',
})
export class PokemonCard  implements OnInit {
  // Declare as Observable — don't subscribe here!

  constructor(private pokemonService: PokemonService) {}
  pokemon$!: Observable<Pokemon>;

  ngOnInit(): void {
    // Assign the Observable — the async pipe subscribes for us
    this.pokemon$ = this.pokemonService.getPokemon(25);
  }
}