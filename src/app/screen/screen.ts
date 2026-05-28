import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon-service/pokemon-service';

@Component({
  selector: 'app-screen',
  imports: [],
  templateUrl: './screen.html',
  styleUrl: './screen.css',
})
export class Screen {
  @Input() pokemon!: Pokemon;
}
